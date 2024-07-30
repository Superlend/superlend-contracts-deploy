import { eEtherlinkNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import { strategyWETH, strategyWXTZ } from "./reservesConfigs";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const EtherlinkV3Market: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 30,
  WrappedNativeTokenSymbol: "WXTZ",
  MarketId: "Plend Finance",
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
      WXTZ: "0xC2ef9495272B43F5257b35A1b6ddA78932839871",
    },
  },
  ChainlinkAggregator: {
    [eEtherlinkNetwork.etherlinkTest]: {
      ETH: "0xb31D94df41ccc22b46fd2Ae4eA2a6D6eB9c23bfb",
      WXTZ: "0xE06FE39f066562DBfE390167AE49D8Cb66e1F887",
    },
  },
  ReservesConfig: {
    ETH: strategyWETH,
    WXTZ: strategyWXTZ,
  },
  ReserveFactorTreasuryAddress: {
    [eEtherlinkNetwork.etherlinkTest]:
      "0x3c7245B471faAB2aA4F4ccf07a7056C10989be68",
  },
  EModes: {
    // StableEMode: {
    //   id: "1",
    //   ltv: "9700",
    //   liquidationThreshold: "9750",
    //   liquidationBonus: "10100",
    //   label: "Stablecoins",
    //   assets: ["EUSDC", "USDT"],
    // },
  },
};

export default EtherlinkV3Market;
