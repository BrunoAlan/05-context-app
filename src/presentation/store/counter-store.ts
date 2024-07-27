import { create } from 'zustand';

export interface ConuterState {
  counter: number;
  incrementBy: (value: number) => void;
}

export const useCounterStore = create<ConuterState>((set, get) => ({
  counter: 0,
  incrementBy: (value: number) => set({ counter: get().counter + value }),
}));
