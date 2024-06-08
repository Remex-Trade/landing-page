"use client";
import React, { useMemo } from "react";
import { SetTradeDataWithKey, TradeData } from "../types";
import { useAccount, useReadContract } from "wagmi";
import { ConnectKitButton } from "connectkit";
import { erc20Abi, parseEther } from "viem";
import useGetDaiAllowance from "../../../contracts-integration/hooks/useGetDaiAllowance";
import useGetDaiBalance from "../../../contracts-integration/hooks/useGetDaiBallance";
import { useHandleApprove } from "../../../contracts-integration/hooks/useHandleApprove";
import { useHandleTrade } from "../../../contracts-integration/hooks/useHandleTrade";

type Props = { setTradeData: SetTradeDataWithKey; tradeData: TradeData };

export default function ActionButton({ tradeData }: Props) {
  const { isDisconnected } = useAccount();
  const { data: daiAllowance, queryKey} = useGetDaiAllowance();
  const { data: daiBalance } = useGetDaiBalance();
  const { mutate: handleApprove, isPending: isHandleApproveLoading } =
    useHandleApprove(queryKey);
  const { mutate: handleTrade, isPending: isHandleTradeLoading } =
    useHandleTrade();
  const isApproved = useMemo(() => {
    if (
      daiAllowance > BigInt(0) &&
      daiAllowance >= parseEther(tradeData.daiToken || "0")
    )
      return true;
    return false;
  }, [tradeData.daiToken, daiAllowance]);

  return (
    <div className="w-full mt-2 flex items-center justify-center">
      <div>
        {isDisconnected ? (
          <ConnectKitButton />
        ) : isApproved ? (
          <button
            onClick={() => handleTrade(tradeData)}
            className={`rounded-lg px-20 py-2 text-lg dark:text-slate-800 font-bold ${
              tradeData.longOrShort === "Long" ? "bg-[#0cf3c0]" : "bg-red-500"
            }`}
            disabled={isHandleTradeLoading}
          >
            {isHandleTradeLoading
              ? "Loading..."
              : tradeData.longOrShort === "Long"
              ? "Buy/Long"
              : "Sell/Short"}
          </button>
        ) : (
          <button
            onClick={() => handleApprove()}
            disabled={isHandleApproveLoading}
            className={`rounded-lg px-20 py-2 text-lg text-slate-100  font-bold border-2 border-slate-100 dark:border-slate-800 `}
          >
            {isHandleApproveLoading ? "Loading..." : "Approve"}
          </button>
        )}
      </div>
    </div>
  );
}
