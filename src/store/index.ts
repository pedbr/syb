import create from 'zustand'

type Theme = 'light' | 'dark'

interface Store {
  theme: Theme
  setTheme: (newTheme: Theme) => void
}

const useStore = create<Store>((set) => ({
  theme: 'light',
  setTheme: (newTheme) => set({ theme: newTheme }),
}))

export default useStore
