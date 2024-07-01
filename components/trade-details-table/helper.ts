export function formatPrice(price) {
  if (!price) {
    return "-";
  }

  const parts = price.toString().split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || "";

  const totalDigits = 6;
  const integerDigits = integerPart.length;
  const decimalDigits = Math.max(0, totalDigits - integerDigits);

  return price.toFixed(decimalDigits);
}

export function getNetPnl(
  entry_price: number,
  exit_price: number,
  position_size: number,
  fee_rate: number
) {
  const gross_pnl = position_size * (exit_price - entry_price);
  const buying_fee = entry_price * position_size * fee_rate;
  const selling_fee = exit_price * position_size * fee_rate;
  const total_fees = buying_fee + selling_fee;
  const netPnL = gross_pnl - total_fees;
  return netPnL;
}
