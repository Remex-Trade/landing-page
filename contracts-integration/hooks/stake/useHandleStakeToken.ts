import { useAccount } from "wagmi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { stakeTokens } from "@/contracts-integration/stakingMethods";

export const useHandleStakeToken = () => {
  const { chainId, address } = useAccount();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (amount: string) => {
      await stakeTokens(address, chainId, amount);
    },
    onSuccess: async () => {
      toast.success("Tokens staked successfully");
      await queryClient.invalidateQueries({
        queryKey: ["stakeBalance"],
      });

      return await queryClient.invalidateQueries({
        queryKey: ["userStakeInfo"],
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
