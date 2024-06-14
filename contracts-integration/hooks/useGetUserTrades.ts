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
import { usePriceStore } from "@/store/priceStore";

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
  index: string;
  pairIndex: string;
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
  index: string;
  pairIndex: string;
};

function formatPriceFromBigNumber(price: BigInt) {
  return Number(formatUnits(price.toString(), "10")).toFixed(2);
}

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

  const latestPrice = usePriceStore((state) => state.latestPrice);

  const formattedOpenTrades: FormattedOpenTrades[] = openTradesResult.map(
    (trade) => {
      return {
        type: trade.buy ? "Long" : "Short",
        pair: "BTC/USD",
        size: trade.leverage.valueOf() * trade.leverage.valueOf() + "DAI",
        leverage: trade.leverage.toString() + "x",
        collateral: formatEther(trade.positionSizeDai.toString()) + "DAI",
        openPrice: formatPriceFromBigNumber(trade.openPrice),
        price: latestPrice["BTC/USD"],
        sl: formatPriceFromBigNumber(trade.sl),
        tp: formatPriceFromBigNumber(trade.tp),
        index: trade.index.toString(),
        pairIndex: trade.pairIndex.toString(),
      };
    }
  );
  console.log("trade", openTradesCount, openLimitCount, formattedOpenTrades);

  const formattedLimitOrders: FormattedOpenLimitOrders[] = openLimitResult.map(
    (trade) => {
      return {
        type: trade.buy ? "Long" : "Short",
        pair: "BTC/USD",
        size: trade.leverage.valueOf() * trade.leverage.valueOf() + "DAI",
        leverage: trade.leverage.toString() + "x",
        collateral: formatEther(trade.positionSizeDai.toString()) + "DAI",
        openPrice: formatPriceFromBigNumber(trade.openPrice),
        price: "-",
        sl: formatPriceFromBigNumber(trade.sl),
        tp: formatPriceFromBigNumber(trade.tp),
        index: trade.index.toString(),
        pairIndex: trade.pairIndex.toString(),
        minPrice: formatPriceFromBigNumber(trade.minPrice),
        maxPrice: formatPriceFromBigNumber(trade.maxPrice),
      };
    }
  );

  return {
    openTrades: openTradesResult,
    openLimitOrders: openLimitResult,
    openTradesCount,
    openLimitCount,
    formattedOpenTrades,
    formattedLimitOrders,
  };
};

export default function useGetUserTrades() {
  const { chainId, address } = useAccount();
  console.log("id", chainId, address);
  return useQuery({
    queryKey: ["userTradesData"],
    queryFn: async () => await handleGetUserInfo(address, chainId),
  });
}
