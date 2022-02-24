import { Button } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import ScrobbleApi from './api/scrobble-api'
import { DARK_THEME, DEFAULT_ZONE_ID, LIGHT_THEME } from './constants'
import useStore from './store'

interface Track {
  song_name: string
}

function App() {
  const [playingNow, setPlayingNow] = useState<Track | null>()
  const api = useMemo(() => new ScrobbleApi(DEFAULT_ZONE_ID), [])

  const { theme, setTheme } = useStore()

  console.log('theme', theme)

  const fetchData = api.fetchHistory()

  useEffect(() => {
    api.subscribe(setPlayingNow)
  }, [api])

  console.log(fetchData)

  return (
    <div className='App'>
      {playingNow?.song_name}
      <Button
        onClick={() =>
          setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)
        }
      >
        Toggle theme
      </Button>
    </div>
  )
}

export default App
