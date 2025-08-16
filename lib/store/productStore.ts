import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      viewMode: "grid",
      setViewMode: (viewMode) => set({ viewMode }),
    }),
    {
      name: "product-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
