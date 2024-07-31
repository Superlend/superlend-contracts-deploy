import { eContractid, IReserveParams } from "../../helpers/types";
import {
  rateStrategyStableOne,
  rateStrategyVolatileOne,
} from "../aave/rateStrategies";

export const strategyBTC: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "7300", // 73%
  liquidationThreshold: "7800", // 78%
  liquidationBonus: "10750", // 100% + 7.5%
  liquidationProtocolFee: "1000", // 10%
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false, // Updated
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2000", // 20%
  supplyCap: "100000", // 100k
  borrowCap: "25000", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
};

// export const strategyBTC: IReserveParams = {
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
//   supplyCap: "100000", // 100k
//   borrowCap: "25000", // 25k
//   debtCeiling: "0",
//   borrowableIsolation: false,
// };

export const strategyUSDT: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "7500", // 75%
  liquidationThreshold: "7800", // 78%
  liquidationBonus: "10500", // 100% + 5% (converted to basis points)
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

// export const strategyUSDT: IReserveParams = {
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
//   supplyCap: "100000", // 100k
//   borrowCap: "25000", // 25k
//   debtCeiling: "0",
//   borrowableIsolation: false,
// };

export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "7500", // 75%
  liquidationThreshold: "7800", // 78%
  liquidationBonus: "10500", // 100% + 5%
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

// export const strategyUSDC: IReserveParams = {
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
//   supplyCap: "100000", // 100k
//   borrowCap: "25000", // 25k
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
  liquidationProtocolFee: "1000", // 10%
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: false, 
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1500", // 15%
  supplyCap: "100000", // 100k
  borrowCap: "25000", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
};
