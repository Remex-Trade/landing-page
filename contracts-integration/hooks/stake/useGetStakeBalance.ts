"use client";
import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { getBalance } from "@/contracts-integration/stakingMethods";
import { parseEther } from "viem";

export default function useGetStakeBalance() {
  const { chainId, address } = useAccount();
  return useQuery({
    queryKey: ["stakeBalance", chainId, address],
    queryFn: async () => getBalance(address, chainId),
    initialData: parseEther("0"),
  });
}

