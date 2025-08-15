import { create } from "zustand";

export const useProductStore = create<ProductState>()((set) => ({
  products: [],
  viewMode: "grid",
  setProducts: (products) => set({ products }),
  setViewMode: (viewMode) => set({ viewMode }),
}));
