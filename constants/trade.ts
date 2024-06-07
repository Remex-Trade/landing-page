export const longShortOption = ["Long", "Short"] as const;
export const tradeTypes = ["Market", "Limit", "Conditional"] as const;
export type TradeType = (typeof tradeTypes)[number];
export type LongShort = (typeof longShortOption)[number];
export const MIN_LEVERAGE = 5;
export const MAX_LEVERAGE = 150;
export const leverageOptions = [5, 25, 50, 75, 100, 125, 150] as const;
export const stopLossOptions = [
  { value: "10", label: "-10%" },
  { value: "25", label: "-25%" },
  { value: "50", label: "-50%" },
  { value: "75", label: "-75%" },
];
export const MIN_POSITION_VALUE = 1500;
export const MAX_POSITION_VALUE = 75000;

export const tradeContractErrors = {
  MAX_TRADES_PER_PAIR: "Maximum of 3 pairs per trade allowed",
  MAX_PENDING_ORDERS: "Maximum of 5 pending trades allowed",
  ABOVE_MAX_POS: "DAI TOKEN limit exceeded (max 75000 with leverage)",
  BELOW_MIN_POS: "DAI TOKEN insufficient (min 1500 with leverage)",
  LEVERAGE_INCORRECT: "Leverage must be between 5 - 150",
  WRONG_TP: "Take profit must be above/below open price for buy/sell orders",
  WRONG_SL: "Stop loss must be below/above open price for buy/sell orders",
};