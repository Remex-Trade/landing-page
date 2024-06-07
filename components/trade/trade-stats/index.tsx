import React from "react";
import { SetTradeDataWithKey, TradeData } from "../types";

type Props = { setTradeData: SetTradeDataWithKey; tradeData: TradeData };

export default function TradeStats({ setTradeData, tradeData }: Props) {
  function validateSlipageInput(input) {
    if (input === "") {
      setTradeData("slippageP", input);
      return true;
    }

    const value = parseFloat(input);
    if (isNaN(value)) return false;
    if (value < 0) return false;
    if (value > 100) return false;
    if (input.split(".")?.[1]?.length > 3) return false;

    setTradeData("slippageP", input);
    return true;
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
        <span className="decoration-dotted underline font-bold">Margin</span>
        <span>0.00USD</span>
      </div>
      <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
        <span className="decoration-dotted underline font-bold">
          Max Open Poisition
        </span>
        <span>0.000USD</span>
      </div>
      <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
        <span className="decoration-dotted underline font-bold">
          Est. Execution Price
        </span>
        <span>196.980</span>
      </div>
      <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
        <span className="decoration-dotted underline font-bold">Slippage</span>
        <div className="flex w-1/5 gap-2 bg-[#2c2d2d]  rounded-md px-2 py-1">
          <input
            // type="number"
            className="bg-transparent outline-none w-full"
            value={tradeData.slippageP}
            onChange={(e) => validateSlipageInput(e.target.value)}
          />
          <span>%</span>
        </div>
      </div>
      <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
        <span className="decoration-dotted underline font-bold">Spread</span>
        <span>0.00%</span>
      </div>
      <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
        <span className="decoration-dotted underline font-bold">
          Position Size
        </span>
        <span>0.00USD</span>
      </div>
      <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
        <span className="">Fees</span>
        <span>0.0000USD</span>
      </div>
      <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
        <span className="">Execution Fee</span>
        <span>0.000012BNB</span>
      </div>
      <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
        <span className="decoration-dotted underline">Liq price</span>
        <span>0</span>
      </div>
    </div>
  );
}
