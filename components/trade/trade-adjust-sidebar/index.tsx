"use client";
import React, { useState } from "react";
import TradeTypeSelecter from "../trade-type";
import { TradeData } from "../types";
import LeverageInput from "../leverage-input";
import OpenPriceInput from "../open-price-input";
import TakeProfitStopLossInput from "../take-profit-stop-loss-input";
import { defaultTradeData } from "./helper";
import CollatoralInput from "../collateral-input";
import ActionButton from "../action-button";
import TradeStats from "../trade-stats";

const   TradeAdjustSidebar = () => {
  const [tradeData, setTradeData] = useState<TradeData>(defaultTradeData);

  function setTradeDataWithKey<K extends keyof TradeData>(
    key: K,
    value: TradeData[K]
  ) {
    setTradeData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }
  return (
    <>
      <TradeTypeSelecter
        setTradeData={setTradeDataWithKey}
        tradeData={tradeData}
      />
      <div className="bg-white text-sm dark:bg-[#0f0e0f] hover:cursor-pointer overflow-hidden md:w-[60%] w-full sc1:w-full min-[450px]:w-[60%]">
        <div className="flex flex-col px-6 py-2 w-full h-content gap-4 overflow-hidden ">
          <CollatoralInput
            setTradeData={setTradeDataWithKey}
            tradeData={tradeData}
          />
          <LeverageInput
            setTradeData={setTradeDataWithKey}
            tradeData={tradeData}
          />
          {tradeData.tradeType != "Market" && (
            <OpenPriceInput
              setTradeData={setTradeDataWithKey}
              tradeData={tradeData}
            />
          )}
          <TakeProfitStopLossInput
            setTradeData={setTradeDataWithKey}
            tradeData={tradeData}
          />

          <ActionButton
            setTradeData={setTradeDataWithKey}
            tradeData={tradeData}
          />

          <TradeStats
            setTradeData={setTradeDataWithKey}
            tradeData={tradeData}
          />
        </div>
      </div>
    </>
  );
};

export default TradeAdjustSidebar;
