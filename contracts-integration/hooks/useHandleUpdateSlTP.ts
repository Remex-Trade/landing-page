import { useAccount } from "wagmi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSl, updateTp } from "../writeMethods";
import {
  FormattedOpenLimitOrders,
  FormattedOpenTrades,
} from "./useGetUserTrades";
import { handleUpdateTradeErrorDisplay } from "@/constants/trade";

export const useHandleUpdateSLTP = () => {
  const { address, chainId } = useAccount();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      trade,
      value,
      updateType,
    }: {
      trade: FormattedOpenTrades | FormattedOpenLimitOrders;
      value: string;
      updateType: "SL" | "TP";
    }) => {
      if (updateType === "TP") {
        await updateTp(
          address,
          chainId,
          Number(trade.pairIndex),
          Number(trade.index),
          Math.round(Number(value) * 10 ** 10).toString()
        );
      } else {
        await updateSl(
          address,
          chainId,
          Number(trade.pairIndex),
          Number(trade.index),
          Math.round(Number(value) * 10 ** 10).toString()
        );
      }
    },
    onSuccess: async () => {
      toast.success(`Updated successfully`);
      return await queryClient.invalidateQueries({
        queryKey: ["userTradesData"],
      });
    },

    onError: (error) => {      
      handleUpdateTradeErrorDisplay(error);
    },
  });
};
