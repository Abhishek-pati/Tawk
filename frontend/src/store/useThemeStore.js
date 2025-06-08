import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "dark", // default fallback
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
  initializeTheme: () => {
    const storedTheme = localStorage.getItem("chat-theme");
    if (storedTheme) {
      set({ theme: storedTheme });
    }
  },
}));
