import { useContext } from "react";
import userContext from "../../app/_context/userContext";
import { usePriceStore } from "../../store/priceStore";

export const useGetCurrentTokenPrice = () => {
  const { data } = useContext(userContext);
  const latestPrice = usePriceStore((state) => state.latestPrice);
  const latestTokenPrice = latestPrice[data.token];
  return latestTokenPrice;
};
