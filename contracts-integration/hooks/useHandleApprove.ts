import { ethers } from "ethers";
import { DAI_TOKEN_ADDRESS, STORAGE_ADDRESS } from "../address";
import { erc20Abi, maxUint256 } from "viem";
import { useChainId } from "wagmi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useHandleApprove = () => {
  const chainId = useChainId();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        DAI_TOKEN_ADDRESS[chainId],
        erc20Abi,
        signer
      );

      const tx = await contract.approve(STORAGE_ADDRESS[chainId], maxUint256);
      await tx.wait();
    },
    onSuccess: async () => {
      toast.success("Approved successfully");
      return await queryClient.invalidateQueries({
        queryKey: ["daiAllowance", "daiBalance"],
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
