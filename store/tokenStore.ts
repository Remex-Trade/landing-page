import useGetPairs, { Pair } from "@/contracts-integration/hooks/useGetPairs";
import { create } from "zustand";

interface SelectedPairState {
  pair: Pair | null;
  setSelectedPair: (pair: Pair) => void;
}

export const useSelectedTokenStore = create<SelectedPairState>()((set) => ({
  pair: null,
  setSelectedPair: (pair) => set((state) => ({ pair })),
}));
