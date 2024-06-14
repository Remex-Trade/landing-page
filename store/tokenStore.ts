import { Pair } from "@/contracts-integration/hooks/useGetPairs";
import { create } from "zustand";

interface SelectedPairState {
  pair: Pair | null;
  setSelectedPair: (pair: Pair) => void;
  setAllPairs: (pairs: Pair[]) => void;
  allPairs: Pair[];
}

export const useSelectedTokenStore = create<SelectedPairState>()((set) => ({
  pair: null,
  allPairs: [],
  setSelectedPair: (pair) => set((state) => ({ pair })),
  setAllPairs: (allPairs) => set((state) => ({ allPairs })),
}));
