import { usePriceStore } from "../../store/priceStore";
import { useSelectedTokenStore } from "@/store/tokenStore";

export const useGetCurrentTokenPrice = () => {
  const pair = useSelectedTokenStore(state => state.pair)
  const latestPrice = usePriceStore((state) => state.latestPrice);

  if (!pair || !latestPrice) return "-";
  const latestTokenPrice = latestPrice[pair.token];
  return latestTokenPrice;
};
