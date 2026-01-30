// stores/authStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoginResponseData } from "../api/models";

interface AuthState {
  user: LoginResponseData | null;
  token: string | null;
  setUser: (user: LoginResponseData, token: string) => void;
  logout: () => void;
  updateToken: (token: string) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
      updateToken: (token) => set((state) => ({ ...state, token })),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }),
    },
  ),
);

export default useAuthStore;
