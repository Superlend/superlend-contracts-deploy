import { eEtherlinkNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import {
  // strategyWETH,
  // strategyWXTZ,
  // strategyUSDT,
  // strategyUSDC,
  // strategyBTC,
  mainnet_strategyBTC,
  mainnet_strategyWETH,
  mainnet_strategyWXTZ,
  mainnet_strategyUSDT,
  mainnet_strategyUSDC,
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
    [eEtherlinkNetwork.etherlinkMain]: true,
  },
  ReserveAssets: {
    [eEtherlinkNetwork.etherlinkTest]: {
      // ETH: "0x8DEF68408Bc96553003094180E5C90d9fe5b88C1",
      WXTZ: "0xB1Ea698633d57705e93b0E40c1077d46CD6A51d8",
      USDT: "0xD21B917D2f4a4a8E3D12892160BFFd8f4cd72d4F",
      USDC: "0xa7c9092A5D2C3663B7C5F714dbA806d02d62B58a",
      // BTC: "0x6bDE94725379334b469449f4CF49bCfc85ebFb27",
    },
    [eEtherlinkNetwork.etherlinkMain]: {
      WETH: "0xfc24f770F94edBca6D6f885E12d4317320BcB401",
      WXTZ: "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
      USDT: "0x2C03058C8AFC06713be23e58D2febC8337dbfE6A",
      USDC: "0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9",
      WBTC: "0xbFc94CD2B1E55999Cfc7347a9313e88702B83d0F",
    },
  },
  ChainlinkAggregator: {
    [eEtherlinkNetwork.etherlinkTest]: {
      // ETH: "0x925210802B1898444c2d5D2DB032D2d0E4c0dCa2",
      WXTZ: "0xB65b179c1Dde023A63650348B75fdE7C32786811",
      USDT: "0x8403Fd99F3918F06D08Ce5F196F6cAf4C27F19B6",
      USDC: "0x58390248A3e6A6d5a269A750CC2a443BCe9D1022",
      // BTC: "0x277b4a7EeeA9B4324f456e571b2343296a214e30",
    },
    [eEtherlinkNetwork.etherlinkMain]: {
      WETH: "0xFdF592a0CeeAAAf5a1EA649582225da0Da5Cd919",
      WXTZ: "0x929dB17A4673f150251fDc7AC4E7B5dd7b2Fd654",
      USDT: "0x6EF1A5A0D0AdA95a3e09eA6D01F9892B775B3976",
      USDC: "0x4F9A119FbE04F89A0491F7c983B9363ED42b187b",
      WBTC: "0x1fF19D163BD364CFFdc873460025F49a9565d77A",
    },
  },
  ReservesConfig: {
    WETH: mainnet_strategyWETH,
    WXTZ: mainnet_strategyWXTZ,
    USDT: mainnet_strategyUSDT,
    USDC: mainnet_strategyUSDC,
    WBTC: mainnet_strategyBTC,
  },
  ReserveFactorTreasuryAddress: {
    [eEtherlinkNetwork.etherlinkTest]:
      "0x250fB04547404729D22Eb8f9C498Da13E9980f2D",
    [eEtherlinkNetwork.etherlinkMain]:
      "0x78466b9DC7023Ad14b955dCDf8BffD2888BCfcF0",
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700", // 97%
      liquidationThreshold: "9850", // 98.5%
      liquidationBonus: "10100", // 101%
      label: "Stablecoins",
      assets: ["USDT", "USDC"],
    },
  },
};

export default EtherlinkV3Market;
