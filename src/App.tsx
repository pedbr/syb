import React, { useEffect, useMemo, useState } from 'react'
import ScrobbleApi from './api/scrobble-api'
import { DEFAULT_ZONE_ID } from './constants'

interface Track {
  song_name: string
}

function App() {
  const [playingNow, setPlayingNow] = useState<Track | null>()
  const api = useMemo(() => new ScrobbleApi(DEFAULT_ZONE_ID), [])

  const fetchData = api.fetchHistory()

  useEffect(() => {
    api.subscribe(setPlayingNow)
  }, [api])

  console.log(fetchData)

  return <div className='App'>{playingNow?.song_name}</div>
}

export default App
