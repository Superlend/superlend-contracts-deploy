import { eContractid, IReserveParams } from "../../helpers/types";
import {
  rateStrategyVolatileOne,
} from "../aave/rateStrategies";

export const mainnet_strategyBTC: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "5500", // 55%
  liquidationThreshold: "6000", // 60%
  liquidationBonus: "10700", // 100% + 7%
  liquidationProtocolFee: "1000", // 10%
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true, // Updated
  reserveDecimals: "8",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "500", // 5%
  supplyCap: "2", // 100k
  borrowCap: "1", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
}

export const mainnet_strategyWETH: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "5500", // 55%
  liquidationThreshold: "6000", // 60%
  liquidationBonus: "10500", // 100% + 5%
  liquidationProtocolFee: "1000", // 10%
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true, // Updated
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "500", // 5%
  supplyCap: "43", // 100k
  borrowCap: "11", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
}

export const mainnet_strategyWXTZ: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "4700", // 47%
  liquidationThreshold: "5200", // 52%
  liquidationBonus: "10500", // 100% + 5%
  liquidationProtocolFee: "1000", // 10%
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "500", // 5%
  supplyCap: "158604", // 100k
  borrowCap: "39651", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const mainnet_strategyUSDT: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "7000", // 70%
  liquidationThreshold: "7500", // 75%
  liquidationBonus: "10500", // 100% + 5% (converted to basis points)
  liquidationProtocolFee: "1000", // 10%
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "500", // 5%
  supplyCap: "100000", // 100k
  borrowCap: "25000", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const mainnet_strategyUSDC: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "7000", // 70%
  liquidationThreshold: "7500", // 75%
  liquidationBonus: "10500", // 100% + 5% (converted to basis points)
  liquidationProtocolFee: "1000", // 10%
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "6",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "500", // 5%
  supplyCap: "100000", // 100k
  borrowCap: "25000", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
};


// ==============================


export const strategyBTC: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "7300", // 73%
  liquidationThreshold: "7800", // 78%
  liquidationBonus: "10750", // 100% + 7.5%
  liquidationProtocolFee: "1000", // 10%
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true, // Updated
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "2000", // 20%
  supplyCap: "2", // 100k
  borrowCap: "1", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyUSDT: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "7500", // 75%
  liquidationThreshold: "7800", // 78%
  liquidationBonus: "10500", // 100% + 5% (converted to basis points)
  liquidationProtocolFee: "1000", // 10%
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000", // 10%
  supplyCap: "100000", // 100k
  borrowCap: "25000", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "7500", // 75%
  liquidationThreshold: "7800", // 78%
  liquidationBonus: "10500", // 100% + 5%
  liquidationProtocolFee: "1000", // 10%
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true, 
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000", // 10%
  supplyCap: "100000", // 100k
  borrowCap: "25000", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
};

export const strategyWXTZ: IReserveParams = {
  strategy: rateStrategyVolatileOne,
  baseLTVAsCollateral: "6000", // 60%
  liquidationThreshold: "6500", // 65%
  liquidationBonus: "11000", // 100% + 10%
  liquidationProtocolFee: "1000", // 10%
  borrowingEnabled: true,
  stableBorrowRateEnabled: false,
  flashLoanEnabled: true,
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1000", // 10%
  supplyCap: "145243", // 100k
  borrowCap: "36311", // 25k
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
  flashLoanEnabled: true, 
  reserveDecimals: "18",
  aTokenImpl: eContractid.AToken,
  reserveFactor: "1500", // 15%
  supplyCap: "38", // 100k
  borrowCap: "10", // 25k
  debtCeiling: "0",
  borrowableIsolation: false,
};
