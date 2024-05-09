import { eContractid, IReserveParams } from "../../helpers/types";
import { rateStrategyStableOne } from "../aave/rateStrategies";

export const strategyEUSD: IReserveParams = {
    strategy: rateStrategyStableOne,
    baseLTVAsCollateral: "8000",
    liquidationThreshold: "8500",
    liquidationBonus: "10500",
    liquidationProtocolFee: "1000",
    borrowingEnabled: true,
    stableBorrowRateEnabled: true,
    flashLoanEnabled: true,
    reserveDecimals: "18",
    aTokenImpl: eContractid.AToken,
    reserveFactor: "1000", // 2 decimals
    supplyCap: "2000000000",
    borrowCap: "0",
    debtCeiling: "500000000",
    borrowableIsolation: true,
};
