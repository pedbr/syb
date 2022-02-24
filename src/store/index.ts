import create from 'zustand'
import { Track } from '../types'

type Theme = 'light' | 'dark'

interface Store {
  theme: Theme
  setTheme: (newTheme: Theme) => void
  trackHistory: Track[]
  setTrackHistory: (data: Track[]) => void
  currentlyPlaying: Track | null
  setCurrentlyPlaying: (track: Track) => void
}

const useStore = create<Store>((set) => ({
  theme: 'light',
  setTheme: (newTheme) => set({ theme: newTheme }),
  trackHistory: [],
  setTrackHistory: (data) => set({ trackHistory: data }),
  currentlyPlaying: null,
  setCurrentlyPlaying: (track) => set({ currentlyPlaying: track }),
}))

export default useStore
