"use client";
import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { getUserStakeInfo } from "@/contracts-integration/stakingMethods";

export default function useGetUserStakeInfo() {
  const { chainId, address } = useAccount();
  return useQuery({
    queryKey: ["userStakeInfo", chainId, address],
    queryFn: async () => getUserStakeInfo(address, chainId),
  });
}
