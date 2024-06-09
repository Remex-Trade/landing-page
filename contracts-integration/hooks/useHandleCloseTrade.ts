
import { useAccount, useChainId } from "wagmi";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { closeTradeMarket } from "../writeMethods";
import { FormattedOpenTrades } from "./useGetUserTrades";

export const useHandleCloseTrade = () => {
  const { address, chainId } = useAccount();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (trade: FormattedOpenTrades) => {
      await closeTradeMarket(
        address,
        chainId,
        Number(trade.pairIndex),
        Number(trade.index)
      );
    },
    onSuccess: async () => {
      toast.success("Trade Closed successfully");
      return await queryClient.invalidateQueries({
        queryKey: ["userTradesData"],
      });
    },

    onError: (error) => {
      console.log(error, error.message);
      const errorMessage =
        error.message?.split("(")[0] ||
        error.message ||
        "Something went wrong!";
      toast.error(errorMessage);
    },
  });
};
