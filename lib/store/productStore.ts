import { create } from "zustand";

export const useProductStore = create<ProductState>()((set) => ({
  product: null,
  setProduct: (product: Product) => set({ product }),
  viewMode: "grid",
  setViewMode: (viewMode) => set({ viewMode }),
  filters: {
    categoryId: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    sortBy: undefined,
  },
  setFilters: (filters: Partial<ProductFilters>) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
}));
