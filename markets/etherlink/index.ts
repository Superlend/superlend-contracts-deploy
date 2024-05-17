import { eEtherlinkNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyUSDT, strategyWBTC } from "../aave/reservesConfigs";
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
      WBTC: "0xaC2173Fb660537382eE3231899Ab5Cb1D86Eb2b7",
      USDT: "0xecBe98e6F09d24b1337C9EF7db80CC3DE8f923e6",
      // EUSD: "0x1A71f491fb0Ef77F13F8f6d2a927dd4C969ECe4f",
      // agEURO: "0x26E72FE7B799b743B02bb41d510483F831C8313F",
    },
  },
  ChainlinkAggregator: {
    [eEtherlinkNetwork.etherlinkTest]: {
      WBTC: "0xfe66A25096128f57D3876D42cD2B4347a77784c2",
      USDT: "0xE00E663a2F2631376f45fe12fde1B6104EA40581",
      // EUSD: "0x0000000000000000000000000000000000000000",
      // agEURO: "0x0000000000000000000000000000000000000000",
    },
  },
  ReservesConfig: {
    WBTC: strategyWBTC,
    USDT: strategyUSDT,
    // EUSD: strategyEUSD,
    // agEURO: strategyEUSD,
  },
  EModes: {},
  ReserveFactorTreasuryAddress: {},
};

export default EtherlinkV3Market;
