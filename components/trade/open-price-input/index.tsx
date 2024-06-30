import React, { useEffect } from "react";
import { SetTradeDataWithKey, TradeData } from "../types";
import { useGetCurrentTokenPrice } from "@/contracts-integration/hooks/useGetCurrentTokenPrice";

type Props = { setTradeData: SetTradeDataWithKey; tradeData: TradeData };

export default function OpenPriceInput({ setTradeData, tradeData }: Props) {
  const latestTokenPrice = useGetCurrentTokenPrice()?.toFixed?.(2);
  useEffect(() => {
    setTradeData("openPrice", String(latestTokenPrice));
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex rounded-xl text-black dark:text-slate-300 text-[0.9rem] sc1:text-[0.8rem] justify-between items-center">
        <div>Price</div>
        <div>Mark {latestTokenPrice}</div>
      </div>
      <input
        type="number"
        value={tradeData.openPrice}
        onChange={(e) => setTradeData("openPrice", e.target.value)}
        className="w-full rounded-xl px-4 py-2 text-xl sc1:text-lg text-black sc1:px-2 dark:text-white bg-[#d4d4d4] dark:bg-black border-2 dark:border-[#242427] outline-none"
      />
    </div>
  );
}
