import { eEtherlinkNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyWBTC } from "../aave/reservesConfigs";
import { strategyEUSD } from "./reservesConfigs";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const EtherlinkV3Market: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 30,
  WrappedNativeTokenSymbol: "WXTZ",
  MarketId: "Aave Etherlink Market",
  ATokenNamePrefix: "Etherlink",
  StableDebtTokenNamePrefix: "Etherlink",
  VariableDebtTokenNamePrefix: "Etherlink",
  SymbolPrefix: "Xtz",
  ReserveAssets: {
    [eEtherlinkNetwork.etherlinkTest]: {
      WBTC: "0x9630Bc8324aC759f684b615764178C993D290350",
      EUSD: "0x1A71f491fb0Ef77F13F8f6d2a927dd4C969ECe4f",
      agEURO: "0x26E72FE7B799b743B02bb41d510483F831C8313F",
    },
  },
  ChainlinkAggregator: {
    [eEtherlinkNetwork.etherlinkTest]: {
      WBTC: "0xfe66A25096128f57D3876D42cD2B4347a77784c2",
      EUSD: "0x0000000000000000000000000000000000000000",
      agEURO: "0x0000000000000000000000000000000000000000",
    },
  },
  ReservesConfig: {
    WBTC: strategyWBTC,
    EUSD: strategyEUSD,
    agEURO: strategyEUSD,
  },
  EModes: {},
  ReserveFactorTreasuryAddress: {},
};

export default EtherlinkV3Market;
