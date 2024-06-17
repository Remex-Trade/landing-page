"use client";
import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { getPendingRewardDai } from "@/contracts-integration/stakingMethods";
import { formatEther, parseEther } from "viem";

export default function useGetPendingReward() {
  const { chainId, address } = useAccount();
  return useQuery({
    queryKey: ["pendingReward", chainId, address],
    queryFn: async () => {
      const data = await getPendingRewardDai(address, chainId);
      return formatEther(data);
    },
    initialData: "0",
  });
}
