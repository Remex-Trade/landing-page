"use client";
import { useAccount, useReadContract } from "wagmi";
import { erc20Abi } from "viem";
import { DAI_TOKEN_ADDRESS, STORAGE_ADDRESS } from "../address";

export default function useGetDaiAllowance() {
  const { chainId, address } = useAccount();
  return useReadContract({
    abi: erc20Abi,
    address: DAI_TOKEN_ADDRESS[chainId],
    functionName: "allowance",
    args: [address, STORAGE_ADDRESS[chainId]],
    scopeKey: "daiAllowance",
  });
}
