export function getTpValue(
  price: number,
  takeProfitPercentage: number,
  leverage: number
) {
  return price + (price * takeProfitPercentage) / 100 / leverage;
}


export function getSlValue(
    price: number,
    stopLossPercentage: number,
    leverage: number
  ) {
    return price - (price * stopLossPercentage) / 100 / leverage;
  }
  