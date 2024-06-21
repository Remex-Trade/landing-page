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
