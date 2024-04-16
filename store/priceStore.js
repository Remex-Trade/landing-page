import { create } from "zustand";
import {idToToken} from "../helpers/price"

export const usePriceStore = create((set) => ({
  latestPrice: {},
  last24HourPrice: {},
  setLast24HourPrice: (price) =>
    set({ last24HourPrice: { ...price }} ),
  setLatestPrice: (tokenId, price) =>
    set((state) => ({
      latestPrice: { ...state.latestPrice, [idToToken["0x" + tokenId]]: price },
    })),
}));
