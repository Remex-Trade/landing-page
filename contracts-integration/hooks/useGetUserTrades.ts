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
import { useSelectedTokenStore } from "@/store/tokenStore";
import { Pair } from "./useGetPairs";

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

const handleGetUserInfo = async (address: string, chainId: number, pair: Pair) => {
  const pairIndex = pair.pairIndex;
  const openTradesCount = await getOpenTradesCount(address, chainId, pairIndex);
  console.log("openTradesCount", openTradesCount);
  const openLimitCount = await getOpenLimitOrdersCount(address, chainId, pairIndex);
  const openTradesResult = await Promise.all(
    Array.from({ length: openTradesCount }).map(async (_, i) => {
      return await getOpenTrades(address, chainId, pairIndex, i);
    })
  );
  console.log("openTradesCount", openTradesResult);

  const openLimitResult = await Promise.all(
    Array.from({ length: openLimitCount }).map(async (_, i) => {
      return await getOpenLimitOrders(address, chainId, pairIndex, i);
    })
  );

  const formattedOpenTrades: FormattedOpenTrades[] = openTradesResult
    .filter((f) => !f.isClosed)
    .map((trade) => {
      return {
        type: trade.buy ? "Long" : "Short",
        pair: pair.token,
        size: trade.leverage.valueOf() * trade.leverage.valueOf() + "DAI",
        leverage: trade.leverage.toString() + "x",
        collateral: formatEther(trade.positionSizeDai.toString()) + "DAI",
        openPrice: formatPriceFromBigNumber(trade.openPrice),
        price: "-",
        sl: formatPriceFromBigNumber(trade.sl),
        tp: formatPriceFromBigNumber(trade.tp),
        index: trade.index.toString(),
        pairIndex: trade.pairIndex.toString(),
      };
    });

  const formattedLimitOrders: FormattedOpenLimitOrders[] = openLimitResult.map((trade) => {
    return {
      type: trade.buy ? "Long" : "Short",
      pair: pair.token,
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
  });

  return {
    openTradesCount,
    openLimitCount,
    formattedOpenTrades,
    formattedLimitOrders,
  };
};

export default function useGetUserTrades() {
  const { chainId, address } = useAccount();
  const allPairs = useSelectedTokenStore((state) => state.allPairs);
  return useQuery({
    queryKey: ["userTradesData", chainId, address],
    gcTime: 1000 * 10,
    staleTime: 1000 * 10,
    queryFn: async () => {
      const data = await Promise.all(
        allPairs.map(async (pair) => {
          return await handleGetUserInfo(address, chainId, pair);
        })
      );

      const combinedData = data.reduce(
        (acc, curr) => {
          return {
            openTradesCount: acc.openTradesCount + curr.openTradesCount,
            openLimitCount: acc.openLimitCount + curr.openLimitCount,
            formattedOpenTrades: [...acc.formattedOpenTrades, ...curr.formattedOpenTrades],
            formattedLimitOrders: [...acc.formattedLimitOrders, ...curr.formattedLimitOrders],
          };
        },
        {
          openTradesCount: 0,
          openLimitCount: 0,
          formattedOpenTrades: [],
          formattedLimitOrders: [],
        }
      );

      return combinedData;
    },
  });
}
