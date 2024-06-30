"use client";
import React, { useState } from "react";
import {
  LongShort,
  TradeType,
  longShortOption,
  tradeTypes,
} from "../../../constants/trade";
import { SetTradeDataWithKey, TradeData } from "../types";
type Props = { setTradeData: SetTradeDataWithKey; tradeData: TradeData };

const TradeTypeSelecter = ({ setTradeData, tradeData }: Props) => {
  return (
    <>
      <div className="flex w-full md:w-[60%] sc1:w-full h-100 sticky top-0 text-sm min-[450px]:w-[60%]">
        {longShortOption.map((button) => {
          return (
            <button
              className={`w-full px-4 py-2 text-sm sc1:text-lg  font-bold ${
                button === "Long" && tradeData.longOrShort === "Long"
                  ? "dark:bg-[#171F1E] dark:text-[#6ae4bd] bg-[#e5fff7] text-[#29cc6a] text-xl border-b-4 border-b-[#15da8e]"
                  : button === "Short" && tradeData.longOrShort === "Short"
                  ? "text-red-700 bg-[#FDEDEF] dark:bg-[#291B1A] border-b-4 border-b-red-700"
                  : "dark:text-[#4F4F4F] text-[#9CA3AF] bg-white dark:bg-[#0F0E0E] dark:border-[#2C2D2D] border-[#9CA3AF] border-b-2"
              }`}
              onClick={() => {
                setTradeData("longOrShort", button);
              }}
            >
              {button}
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-between sticky top-12 dark:bg-[#0F0E0E]  bg-white text-black h-31 px-4 w-full md:w-[60%] sc1:w-full text-[0.85rem] h-100 dark:text-[#4F4F4F] gap-6  min-[450px]:w-[60%]">
        <div className="flex items-center gap-2 py-2 w-full justify-center font-bold">
          {tradeTypes.map((option) => {
            return (
              <button
                className={`${
                  option === tradeData.tradeType
                    ? "h-full py-2 dark:text-white bg-[#D4D4D4] dark:bg-black font-bold text-black dark:border-[#211E28] border-2 "
                    : "h-full py-2 text-neutral-500 bg-[#D4D4D4] dark:bg-[#0F0F12] dark:border-[#211E28] border-2"
                } px-4 rounded-lg my-2 w-full`}
                onClick={() => setTradeData("tradeType", option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TradeTypeSelecter;
