import { eEtherlinkNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import {
  strategyUSDT,
  strategyWBTC,
  strategyWXTZ,
} from "../aave/reservesConfigs";

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
  // L2PoolEnabled: {
  //   [eEtherlinkNetwork.etherlinkTest]: true,
  // },
  ReserveAssets: {
    [eEtherlinkNetwork.etherlinkTest]: {
      WBTC: "0x0F8f22977d57e0b7b04999419865dCd0277b8C41",
      USDT: "0xF1611a297B1D9120fd4383856B4524Ad54BC7086",
      EUSDC: "0xc4ad0AB9eB49654738C76967E78152ADAbE99Db4",
      EXTZ: "0x576039C3D55527CF86FFBcA84771AcDed99310f7",
      WXTZ: "0xC2ef9495272B43F5257b35A1b6ddA78932839871",
    },
  },
  ChainlinkAggregator: {
    [eEtherlinkNetwork.etherlinkTest]: {
      WBTC: "0x56e80beA853DeAfff830Aff02b2a2B364B41e3Bc",
      USDT: "0x73442574Af0f78DEAd58b392d593CA7f10B9A0B2",
      EUSDC: "0xc7EF2855D89581130E5760Ee6861F3560a2354EA",
      EXTZ: "0x3A2bf7f2E1B41c3CF2Fb22975C737bEBE13226d1",
      WXTZ: "0x3A2bf7f2E1B41c3CF2Fb22975C737bEBE13226d1",
    },
  },
  ReservesConfig: {
    WBTC: strategyWBTC,
    USDT: strategyUSDT,
    EUSDC: strategyUSDT,
    EXTZ: strategyWXTZ,
    WXTZ: strategyWXTZ,
    // EUSD: strategyEUSD,
    // agEURO: strategyEUSD,
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["EUSDC", "USDT"],
    },
  },
  ReserveFactorTreasuryAddress: {},
};

export default EtherlinkV3Market;
