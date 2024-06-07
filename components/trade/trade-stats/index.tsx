import React from "react";

type Props = {};

export default function TradeStats({}: Props) {
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
