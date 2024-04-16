import { create } from "zustand";
import {idToToken} from "../helpers/price"

export const usePriceStore = create((set) => ({
  latestPrice: {},
  setLatestPrice: (tokenId, price) =>
    set((state) => ({
      latestPrice: { ...state.latestPrice, [idToToken["0x" + tokenId]]: price },
    })),
}));
