import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "dark",
  setTheme: () => {}, // Theme is fixed to dark
}));
