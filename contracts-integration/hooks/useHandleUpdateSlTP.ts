import { useAccount } from "wagmi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSl, updateOpenLimitOrder, updateTp } from "../writeMethods";
import {
  FormattedOpenLimitOrders,
  FormattedOpenTrades,
} from "./useGetUserTrades";
import { handleUpdateTradeErrorDisplay } from "@/constants/trade";
import { parseUnits } from "viem";

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
      if (trade.tradeType === "Market"){
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
      } else{
        const newPrice = parseUnits(trade.openPrice, 10).toString()
        const newSl = updateType === "TP" ?  parseUnits(trade.sl, 10).toString() : parseUnits(value, 10).toString()
        const newTp = updateType === "TP" ?  parseUnits(value, 10).toString() : parseUnits(trade.tp, 10).toString()

        await updateOpenLimitOrder(
          address,
          chainId,
          Number(trade.pairIndex),
          Number(trade.index),
          newPrice,
          newSl,
          newTp
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
