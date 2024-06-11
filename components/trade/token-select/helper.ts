import useGetPairs from "@/contracts-integration/hooks/useGetPairs";

export const TOKEN_TYPE_OPTIONS = [
  "All",
  "New",
  "Crypto",
  "Forex",
  "Commodities",
  "Meme",
] as const;

export type FormattedPair = {
  id: number;
  icon: string;
  name: string;
};

export function formatPairs(
  pairs: ReturnType<typeof useGetPairs>["data"]
): FormattedPair[] {
  if (!pairs) {
    return [];
  }

  return pairs.map((pair) => {
    return {
      id: pair.pairIndex,
      icon: `/Images/${pair.from.toLowerCase()}.png`,
      name: `${pair.from}/${pair.to}`,
    };
  });
}
