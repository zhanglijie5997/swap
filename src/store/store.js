import { create } from 'zustand'
import { getStorage } from '../utils/utils';
/** @type {import('zustand').StateCreator<{baseData: import('../../global').Store}>} */
export const useStore = create((set) => ({
    baseData: getStorage("wagmi.store"),
    increasePopulation: () => set((state) => ({ baseData: state })),
    removeAllBears: () => set({ baseData: {} }),
  }))
  