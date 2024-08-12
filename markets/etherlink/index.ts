import { eEtherlinkNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import {
  strategyWETH,
  strategyWXTZ,
  strategyUSDT,
  strategyUSDC,
  strategyBTC,
} from "./reservesConfigs";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const EtherlinkV3Market: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 30,
  WrappedNativeTokenSymbol: "WXTZ",
  MarketId: "Superlend",
  ATokenNamePrefix: "",
  StableDebtTokenNamePrefix: "",
  VariableDebtTokenNamePrefix: "",
  SymbolPrefix: "",
  L2PoolEnabled: {
    [eEtherlinkNetwork.etherlinkTest]: true,
  },
  ReserveAssets: {
    [eEtherlinkNetwork.etherlinkTest]: {
      ETH: "0x8DEF68408Bc96553003094180E5C90d9fe5b88C1",
      WXTZ: "0xB1Ea698633d57705e93b0E40c1077d46CD6A51d8",
      USDT: "0xD21B917D2f4a4a8E3D12892160BFFd8f4cd72d4F",
      USDC: "0xa7c9092A5D2C3663B7C5F714dbA806d02d62B58a",
      BTC: "0x6bDE94725379334b469449f4CF49bCfc85ebFb27",
    },
  },
  ChainlinkAggregator: {
    [eEtherlinkNetwork.etherlinkTest]: {
      ETH: "0x925210802B1898444c2d5D2DB032D2d0E4c0dCa2",
      WXTZ: "0xB65b179c1Dde023A63650348B75fdE7C32786811",
      USDT: "0x8403Fd99F3918F06D08Ce5F196F6cAf4C27F19B6",
      USDC: "0x58390248A3e6A6d5a269A750CC2a443BCe9D1022",
      BTC: "0x277b4a7EeeA9B4324f456e571b2343296a214e30",
    },
  },
  ReservesConfig: {
    ETH: strategyWETH,
    WXTZ: strategyWXTZ,
    USDT: strategyUSDT,
    USDC: strategyUSDC,
    BTC: strategyBTC,
  },
  ReserveFactorTreasuryAddress: {
    [eEtherlinkNetwork.etherlinkTest]:
      "0x250fB04547404729D22Eb8f9C498Da13E9980f2D",
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDT", "USDC"],
    },
  },
};

export default EtherlinkV3Market;
