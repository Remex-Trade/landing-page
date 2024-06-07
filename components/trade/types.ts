import { LongShort, TradeType } from "../../constants/trade";

export type TradeData = {
  longOrShort: LongShort;
  tradeType: TradeType;
  daiToken: string;
  openPrice: string;
  leverage: string;
  takeProfit: string;
  stopLoss: string;
  slippageP: string;
  isTpSl: boolean;
};

export type SetTradeDataWithKey = <K extends keyof TradeData>(
  key: K,
  value: TradeData[K]
) => void;
