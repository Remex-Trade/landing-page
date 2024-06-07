import React from "react";
import { SetTradeDataWithKey, TradeData } from "../types";
import {
  MIN_LEVERAGE,
  MAX_LEVERAGE,
  leverageOptions,
} from "../../../constants/trade";
type Props = { setTradeData: SetTradeDataWithKey; tradeData: TradeData };

export default function LeverageInput({ tradeData, setTradeData }: Props) {
  return (
    <div className="flex justify-center w-full gap-4">
      <div className="flex flex-col justify-center w-full gap-2 ">
        <div className="w-full flex items-center justify-between">
          <span className="text-sm text-slate-200">Leverage</span>
          <div className="w-[30%] rounded-md border-[1px] justify-center items-center flex dark:border-gray-800 h-10 dark:bg-black bg-[#F7F8F7] dark:text-white text-gray-700">
            {`${tradeData.leverage}x`}
          </div>
        </div>
        <div className="w-[90%] flex justify-between relative items-center h-3 rounded-lg mt-2 dark:bg-black border border-[#2c2d2d] bg-[#F7F7F8] text-gray-500 dark:text-white">
          <input
            className="slider z-10 relative transitiion duration-2"
            id="slider"
            type="range"
            step="1"
            min={MIN_LEVERAGE}
            max={MAX_LEVERAGE}
            value={tradeData.leverage}
            onChange={(e) => setTradeData("leverage", e.target.value)}
          />

          <div className="absolute z-0 flex w-full justify-between">
            {leverageOptions.map((item) => (
              <div key={item} className="h-full">
                <div className="rounded-full bg-gray-400 w-1 h-1 "></div>
              </div>
            ))}
          </div>
          <div
            className={`absolute z-0 dark:bg-gradient-to-r dark:from-[#2ACCF6] dark:to-[#6EFECF] h-2 rounded-lg`}
            style={{
              width: `${
                ((Number(tradeData.leverage) - MIN_LEVERAGE) / MAX_LEVERAGE) *
                100
              }%`,
            }}
          ></div>
        </div>
        <div className="w-[95%] text-[0.7rem] mb-5 text-gray-500 flex h-fit justify-between">
          {leverageOptions.map((option) => (
            <span key={option}>{option}x</span>
          ))}
        </div>
      </div>
    </div>
  );
}
