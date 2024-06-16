import { useAccount } from "wagmi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { unstakeTokens } from "@/contracts-integration/stakingMethods";

export const useHandleUnstakeToken = () => {
  const { chainId, address } = useAccount();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (amount: string) => {
      await unstakeTokens(address, chainId, amount);
    },
    onSuccess: async () => {
      toast.success("Token unstaked successfully");
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
