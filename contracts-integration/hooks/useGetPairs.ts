import { useQuery } from "@tanstack/react-query";
import { useChainId } from "wagmi";
import { getPairs } from "../pairsMethods";
import { useSelectedTokenStore } from "@/store/tokenStore";

export type Pair = ReturnType<typeof useGetPairs>["data"][number];

export default function useGetPairs() {
  const chainId = useChainId();
  const setAllPairs = useSelectedTokenStore((state) => state.setAllPairs);

  return useQuery({
    queryKey: ["pairs", chainId],
    queryFn: async () => {
      const pairs = await getPairs(chainId);

      const formattedPairs = pairs.map((pair) => {
        return {
          ...pair,
          id: pair.pairIndex,
          icon: `/Images/${pair.from.toLowerCase()}.png`,
          token: `${pair.from}/${pair.to}`,
        };
      });

      setAllPairs(formattedPairs);
      return formattedPairs;
    },
  });
}
