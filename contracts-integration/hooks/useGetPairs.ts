// getPairs

import { useQuery } from "@tanstack/react-query";
import { useChainId } from "wagmi";
import { getPairs } from "../pairsMethods";

export default function useGetPairs() {
  const chainId = useChainId();

  return useQuery({
    queryKey: ["pairs", chainId],
    queryFn: async () => getPairs(chainId),
  });
}
