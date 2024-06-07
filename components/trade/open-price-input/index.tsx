import React, { useContext, useEffect } from "react";
import { SetTradeDataWithKey, TradeData } from "../types";
import userContext from "../../../app/_context/userContext";
import { usePriceStore } from "../../../store/priceStore";

type Props = { setTradeData: SetTradeDataWithKey; tradeData: TradeData };

export default function OpenPriceInput({ setTradeData, tradeData }: Props) {
  const { data } = useContext(userContext);
  const latestPrice = usePriceStore((state) => state.latestPrice);
  const latestTokenPrice = latestPrice[data.token]?.toFixed?.(2)
  useEffect(() => {
    setTradeData("openPrice", String(latestTokenPrice));
  }, [])
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex rounded-xl text-slate-300 text-[0.9rem] sc1:text-[0.8rem] justify-between items-center">
        <div>Price</div>
        <div>Mark {latestTokenPrice}</div>
      </div>
      <input
        type="number"
        value={tradeData.openPrice}
        onChange={(e) => setTradeData("openPrice", e.target.value)}
        className="w-full rounded-xl px-4 py-2 text-xl sc1:text-lg sc1:px-2 text-white bg-black border-2 border-[#161623]"
      />
    </div>
  );
}
