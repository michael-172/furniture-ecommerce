import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userId: null,
      user: null,
      isAuthenticated: false,
      login: (userId, user) => set({ userId, user, isAuthenticated: true }),
      logout: () => {
        set({ userId: null, user: null, isAuthenticated: false });
        document.cookie =
          "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      },
    }),
    {
      name: "user-storage", // Key for localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
