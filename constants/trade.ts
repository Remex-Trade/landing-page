export const longShortOption = ["Long", "Short"] as const;
export const tradeTypes = ["Market", "Limit", "Conditional"] as const;
export type TradeType = (typeof tradeTypes)[number];
export type LongShort = (typeof longShortOption)[number];
export const MIN_LEVERAGE = 5;
export const MAX_LEVERAGE = 150;
export const leverageOptions = [5, 150] as const;
export const stopLossOptions = [
  { value: "10", label: "-10%" },
  { value: "25", label: "-25%" },
  { value: "50", label: "-50%" },
  { value: "75", label: "-75%" },
];
export const MIN_POSITION_VALUE = 1500;
export const MAX_POSITION_VALUE = 75000;
