import { MAX_LEVERAGE, MIN_POSITION_VALUE } from "../../../constants/trade";
import { TradeData } from "../types";

export const defaultTradeData: TradeData = {
  longOrShort: "Long",
  tradeType: "Market",
  daiToken: String(Math.round(MIN_POSITION_VALUE / MAX_LEVERAGE * 10 / 10)),
  openPrice: "",
  leverage: "5",
  takeProfit: "1",
  stopLoss: "0",
  slippageP: "1",
  isTpSl: false,
};
