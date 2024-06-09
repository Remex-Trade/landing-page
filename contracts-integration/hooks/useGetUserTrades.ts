"use client";
import { useAccount } from "wagmi";
import {
  getOpenLimitOrders,
  getOpenLimitOrdersCount,
  getOpenTrades,
  getOpenTradesCount,
} from "../readMethods";
import { useQuery } from "@tanstack/react-query";
import { LongShort } from "@/constants/trade";
import { formatUnits, formatEther } from "ethers/lib/utils";

export type FormattedOpenTrades = {
  type: LongShort;
  pair: string;
  size: string;
  leverage: string;
  collateral: string;
  openPrice: string;
  price: string;
  sl: string;
  tp: string;
  index: string,
  pairIndex: string
};
export type FormattedOpenLimitOrders = {
  type: LongShort;
  pair: string;
  size: string;
  leverage: string;
  collateral: string;
  openPrice: string;
  price: string;
  minPrice: string;
  maxPrice: string;
  sl: string;
  tp: string;
  index: string,
  pairIndex: string
};

  // [
  //   "Type",
  //   "Pair",
  //   "Size",
  //   "Leverage",
  //   "Collateral",
  //   "Trigger Price",
  //   "Execution Price",
  //   "SL/TP",
  //   "Close",
  // ]

const handleGetUserInfo = async (address: string, chainId: number) => {
  const openTradesCount = await getOpenTradesCount(address, chainId, 0);
  const openLimitCount = await getOpenLimitOrdersCount(address, chainId, 0);
  const openTradesResult = await Promise.all(
    Array.from({ length: openTradesCount }).map(async (_, i) => {
      return await getOpenTrades(address, chainId, 0, i);
    })
  );

  const openLimitResult = await Promise.all(
    Array.from({ length: openLimitCount }).map(async (_, i) => {
      return await getOpenLimitOrders(address, chainId, 0, i);
    })
  );

  const formattedOpenTrades: FormattedOpenTrades[] = openTradesResult.map(
    (trade) => {
      return {
        type: trade.buy ? "Long" : "Short",
        pair: "BTC/USD",
        size: trade.leverage.valueOf() * trade.leverage.valueOf() + "DAI",
        leverage: trade.leverage.toString() + "x",
        collateral: formatEther(trade.positionSizeDai.toString()) + "DAI",
        openPrice: formatUnits(trade.openPrice.toString(), "10"),
        price: "-",
        sl: formatUnits(trade.sl.toString(), "10"),
        tp: formatUnits(trade.tp.toString(), "10"),
        index: trade.index.toString(),
        pairIndex: trade.pairIndex.toString()
      };
    }
  );

  const formattedLimitOrders: FormattedOpenLimitOrders[] = openLimitResult.map(
    (trade) => {
      return {
        type: trade.buy ? "Long" : "Short",
        pair: "BTC/USD",
        size: trade.leverage.valueOf() * trade.leverage.valueOf() + "DAI",
        leverage: trade.leverage.toString() + "x",
        collateral: formatEther(trade.positionSizeDai.toString()) + "DAI",
        openPrice: formatUnits(trade.openPrice.toString(), "10"),
        price: "-",
        sl: formatUnits(trade.sl.toString(), "10"),
        tp: formatUnits(trade.tp.toString(), "10"),
        index: trade.index.toString(),
        pairIndex: trade.pairIndex.toString(),
        minPrice: formatUnits(trade.minPrice.toString(), "10"),
        maxPrice: formatUnits(trade.maxPrice.toString(), "10"),
      };
    }
  );

  return {
    openTrades: openTradesResult,
    openLimitOrders: openLimitResult,
    openTradesCount,
    openLimitCount,
    formattedOpenTrades,
    formattedLimitOrders
  };
};

export default function useGetUserTrades() {
  const { chainId, address } = useAccount();

  return useQuery({
    queryKey: ["userTradesData"],
    queryFn: async () => handleGetUserInfo(address, chainId),
  });
}
