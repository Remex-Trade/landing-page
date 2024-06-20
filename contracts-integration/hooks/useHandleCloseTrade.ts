import { useAccount } from "wagmi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { cancelOpenLimitOrder, closeTradeMarket } from "../writeMethods";
import {
  FormattedOpenLimitOrders,
  FormattedOpenTrades,
} from "./useGetUserTrades";
import { TradeType, handleUpdateTradeErrorDisplay } from "@/constants/trade";

export const useHandleCloseTrade = (tradeType: TradeType) => {
  const { address, chainId } = useAccount();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (
      trade: FormattedOpenTrades | FormattedOpenLimitOrders
    ) => {
      if (tradeType === "Market") {
        await closeTradeMarket(
          address,
          chainId,
          Number(trade.pairIndex),
          Number(trade.index)
        );
      } else {
        await cancelOpenLimitOrder(
          address,
          chainId,
          Number(trade.pairIndex),
          Number(trade.index)
        );
      }
    },
    onSuccess: async () => {
      toast.success("Trade Closed successfully");
      return await queryClient.invalidateQueries({
        queryKey: ["userTradesData"],
      });
    },

    onError: (error) => {
      handleUpdateTradeErrorDisplay(error);
    },
  });
};
