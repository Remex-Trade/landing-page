import { useAccount } from "wagmi";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { TradeData } from "../../components/trade/types";
import {
  getSlValue,
  getTpValue,
} from "../../components/trade/take-profit-stop-loss-input/helper";
import { openTrade } from "../writeMethods";
import { getOpenLimitOrdersCount, getOpenTradesCount } from "../readMethods";
import { useGetCurrentTokenPrice } from "./useGetCurrentTokenPrice";
import { tradeContractErrors } from "../../constants/trade";
import { useSelectedTokenStore } from "@/store/tokenStore";

export const useHandleTrade = () => {
  const { address, chainId } = useAccount();
  const latestTokenPrice = useGetCurrentTokenPrice();
  const queryClient = useQueryClient();
  const selectedToken = useSelectedTokenStore(state => state.pair)
  return useMutation({
    mutationFn: async (tradeData: TradeData) => {
      console.log(
        "Executing useHandleTrade mutationFn",
        tradeData,
        latestTokenPrice
      );
      const buy = tradeData.longOrShort === "Long";
      const isMarket = tradeData.tradeType === "Market";
      const isTpSl = tradeData.isTpSl
      const openPrice = isMarket
        ? Number(latestTokenPrice)
        : Number(tradeData.openPrice);

      const takeProfit = getTpValue(
        openPrice,
        Number(tradeData.takeProfit),
        Number(tradeData.leverage),
        tradeData.longOrShort
      );

      const stopLoss = isTpSl ?  getSlValue(
        openPrice,
        Number(tradeData.stopLoss),
        Number(tradeData.leverage),
        tradeData.longOrShort
      ) : 0;

      const type =
        tradeData.tradeType === "Limit"
          ? "1"
          : tradeData.tradeType === "Conditional"
          ? "2"
          : "0";

      let index = 0;
      if (isMarket) {
        index = await getOpenTradesCount(address, chainId, 0);
      } else {
        index = await getOpenLimitOrdersCount(address, chainId, 0);
      }

      console.log("Index:", index);

      const config = {
        pairIndex: selectedToken.pairIndex,
        buy,
        daiToken: tradeData.daiToken,
        index,
        initialPosToken: "0",
        leverage: Number(tradeData.leverage),
        openPrice: Math.round(openPrice * 10 ** 10).toString(),
        stopLoss: Math.round(stopLoss * 10 ** 10).toString(),
        takeProfit: Math.round(takeProfit * 10 ** 10).toString(),
        slippageP: Math.round(
          Number(tradeData.slippageP) * 10 ** 10
        ).toString(),
        referral: "0x0000000000000000000000000000000000000000",
        type: type,
      } as const;

      await openTrade(address, chainId, config);
    },
    onSuccess: async () => {
      toast.success("Trade opened successfully.");
        return await queryClient.invalidateQueries({
          queryKey: ["userTradesData"],
        });
    },

    onError: (error) => {
      console.error("Error opening trade:", error);
      let errorMessage = error.message || "Something went wrong!";

      Object.entries(tradeContractErrors).forEach(([key, value]) => {
        if (error["message"].includes(key)) {
          errorMessage = value;
        }
      });

      toast.error(errorMessage);
    },
  });
};
