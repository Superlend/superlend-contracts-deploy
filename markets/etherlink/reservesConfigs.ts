import { eContractid, IReserveParams } from "../../helpers/types";
import {
  rateStrategyStableOne,
  rateStrategyVolatileOne,
} from "../aave/rateStrategies";

// export const strategytzBTC: IReserveParams = {
//   strategy: rateStrategyVolatileOne,
//   baseLTVAsCollateral: "7000",
//   liquidationThreshold: "7500",
//   liquidationBonus: "11000",
//   liquidationProtocolFee: "1000",
//   borrowingEnabled: true,
//   stableBorrowRateEnabled: false,
//   flashLoanEnabled: false,
//   reserveDecimals: "18",
//   aTokenImpl: eContractid.AToken,
//   reserveFactor: "2000",
//   supplyCap: "0",
//   borrowCap: "0",
//   debtCeiling: "0",
//   borrowableIsolation: false,
// };

export const strategyWXTZ: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "6000", // 60%
  liquidationThreshold: "6500", // 65%
  liquidationBonus: "11000", // 100% + 10%
  liquidationProtocolFee: "1000", // 10%
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000", // 10%
  supplyCap: "100000", // 100k
  borrowCap: "25000", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyWETH: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "8000", // 80%
  liquidationThreshold: "8250", // 82.5%
  liquidationBonus: "10500", // 100% + 5%
  // TODO: Update this value below
  liquidationProtocolFee: "1000",
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false, // Updated from the file
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1500", // 15%
  supplyCap: "100000", // 100k
  borrowCap: "25000", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
};
