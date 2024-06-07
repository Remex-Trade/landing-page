import { LongShort } from "../../../constants/trade";

export function getTpValue(
  price: number,
  takeProfitPercentage: number,
  leverage: number,
  longOrShort: LongShort
) {
  return longOrShort === "Long"
    ? price + (price * takeProfitPercentage) / 100 / leverage
    : price - (price * takeProfitPercentage) / 100 / leverage;
}

export function getSlValue(
  price: number,
  stopLossPercentage: number,
  leverage: number,
  longOrShort: LongShort
) {
  return longOrShort === "Long"
    ? price - (price * stopLossPercentage) / 100 / leverage
    : price + (price * stopLossPercentage) / 100 / leverage;
}
