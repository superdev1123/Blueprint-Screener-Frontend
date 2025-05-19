import { create } from 'zustand';

interface ResultStore {
  results: string[] | null;
  setResults: (results: string[]) => void;
  resetResults: () => void;
}

export const useResultStore = create<ResultStore>((set) => ({
  results: null,
  setResults: (results) => set({ results }),
  resetResults: () => set({ results: null }),
}));