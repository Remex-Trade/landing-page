import { useAccount } from "wagmi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { approveStakeToken } from "@/contracts-integration/stakingMethods";

export const useHandleApprove = () => {
  const { chainId, address } = useAccount();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await approveStakeToken(address, chainId);
    },
    onSuccess: async () => {
      toast.success("Approved successfully");
      return await queryClient.invalidateQueries({
        queryKey: ["stakeAllowance", chainId, address],
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
