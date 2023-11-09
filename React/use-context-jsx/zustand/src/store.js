import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((prev) => ({ isDarkMode: !prev.isDarkMode }))
}))