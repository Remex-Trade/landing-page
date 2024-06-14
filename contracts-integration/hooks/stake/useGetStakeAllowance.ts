"use client";
import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { getAllowance } from "@/contracts-integration/stakingMethods";

export default function useGetStakeAllowance() {
  const { chainId, address } = useAccount();
  return useQuery({
    queryKey: ["stakeAllowance", chainId, address],
    queryFn: async () => getAllowance(address, chainId)
  });
}

