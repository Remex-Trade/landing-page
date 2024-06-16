import { useAccount } from "wagmi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { approveStakeToken, harvest } from "@/contracts-integration/stakingMethods";

export const useHandleHarvest = () => {
  const { chainId, address } = useAccount();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await harvest(address, chainId);
    },
    onSuccess: async () => {
      toast.success("Harvested successfully");
      return await queryClient.invalidateQueries({
        queryKey: ["pendingReward"],
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
