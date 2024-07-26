import { eEthereumNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyWETHNew, sepoliaStrategyUSDC } from "../aave/reservesConfigs";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const EthereumV3Market: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 30,
  MarketId: "Plend Finance",
  ATokenNamePrefix: "",
  StableDebtTokenNamePrefix: "",
  VariableDebtTokenNamePrefix: "",
  SymbolPrefix: "",
  WrappedNativeTokenSymbol: "WETH",
  // MarketId: "Aave Ethereum Market",
  // ATokenNamePrefix: "Ethereum",
  // StableDebtTokenNamePrefix: "Ethereum",
  // VariableDebtTokenNamePrefix: "Ethereum",
  // SymbolPrefix: "Eth",
  ReserveAssets: {
    [eEthereumNetwork.sepolia]: {
      WETH: "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
      USDC: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
    },
  },
  ChainlinkAggregator: {
    [eEthereumNetwork.sepolia]: {
      WETH: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
      USDC: "0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E",
    },
  },
  ReservesConfig: {
    WETH: strategyWETHNew,
    USDC: sepoliaStrategyUSDC,
  },
  EModes: {},
  ReserveFactorTreasuryAddress: {
    // [eEthereumNetwork.main]: "0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c",
  },
};

export default EthereumV3Market;
