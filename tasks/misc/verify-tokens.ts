import { task } from "hardhat/config";
import {
  eNetwork,
  getAaveProtocolDataProvider,
  getAddressFromJson,
  getPoolConfiguratorProxy,
  POOL_CONFIGURATOR_PROXY_ID,
  POOL_DATA_PROVIDER,
} from "../../helpers";

task(`verify-tokens`).setAction(
  async (_, { deployments, getNamedAccounts, ...hre }) => {
    const network = hre.network.name as eNetwork;
    const dataProvider = await getAaveProtocolDataProvider(
      await getAddressFromJson(network, POOL_DATA_PROVIDER)
    );
    const poolConfigurator = await getPoolConfiguratorProxy(
      await getAddressFromJson(network, POOL_CONFIGURATOR_PROXY_ID)
    );
    const reserves = await dataProvider.getAllReservesTokens();

    const verifyWithRetry = async (address: string, constructorArguments: any[]) => {
      for (let i = 0; i < 5; i++) {
        try {
          const result = await Promise.race([
            hre.run("verify:verify", { address, constructorArguments }),
            new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Verification timed out")), 50000))
          ]);
          return result;
        } catch (error) {
          console.log(`Attempt ${i} failed. Retrying in 10 seconds...`);
          // await new Promise(resolve => setTimeout(resolve, 10000));
        }
      }
      throw new Error("Failed to verify contract after 5 attempts");
    };

    for (let x = 0; x < reserves.length; x++) {
      const { symbol, tokenAddress } = reserves[x];
      console.log(`- Verifying ${symbol} proxies:`);
      const {
        aTokenAddress,
        stableDebtTokenAddress,
        variableDebtTokenAddress,
      } = await dataProvider.getReserveTokensAddresses(tokenAddress);
      try {
        await verifyWithRetry(aTokenAddress, [poolConfigurator.address]);
      } catch (error) {
        console.error(error);
      }
      try {
        await verifyWithRetry(stableDebtTokenAddress, [poolConfigurator.address]);
      } catch (error) {
        console.error(error);
      }
      try {
        await verifyWithRetry(variableDebtTokenAddress, [poolConfigurator.address]);
      } catch (error) {
        console.error(error);
      }
    }
  }
);
