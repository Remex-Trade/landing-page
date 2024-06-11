import { useQuery } from "@tanstack/react-query";
import { useChainId } from "wagmi";
import { getPairs } from "../pairsMethods";

export type Pair = ReturnType<typeof useGetPairs>["data"][number]

export default function useGetPairs() {
  const chainId = useChainId();

  return useQuery({
    queryKey: ["pairs", chainId],
    queryFn: async () => {
      const pairs = await getPairs(chainId);

      return pairs.map((pair) => {
        return {
          ...pair,
          id: pair.pairIndex,
          icon: `/Images/${pair.from.toLowerCase()}.png`,
          token: `${pair.from}/${pair.to}`,
        };
      });
    },
  });
}
