"use client";
import React from "react";
import { SetTradeDataWithKey, TradeData } from "../types";
import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";

type Props = { setTradeData: SetTradeDataWithKey; tradeData: TradeData };

export default function ActionButton({ tradeData }: Props) {
  const { isDisconnected } = useAccount();
  return (
    <div className="w-full mt-2 flex items-center justify-center">
      <div>
        {isDisconnected ? (
          <ConnectKitButton />
        ) : (
          <button
            className={`rounded-lg px-20 py-2 text-lg dark:text-slate-800 font-bold ${
              tradeData.longOrShort === "Long" ? "bg-[#0cf3c0]" : "bg-red-500"
            }`}
          >
            {tradeData.longOrShort === "Long" ? "Buy/Long" : "Sell/Short"}
          </button>
        )}
      </div>
    </div>
  );
}
