import React, { useMemo, useState } from 'react'
import { Box } from '@mui/material'

import ScrobbleApi from '../api/scrobble-api'
import { DEFAULT_ZONE_ID } from '../constants'

import PlayingNow from '../components/PlayingNow'
import Trending from '../components/Trending'

const Player = () => {
  const api = useMemo(() => new ScrobbleApi(DEFAULT_ZONE_ID), [])
  const initialScrobble = api.mockScrobble()

  const [scrobble, setScrobble] = useState(initialScrobble)

  const fetchData = api.fetchHistory()

  console.log('scrobble', initialScrobble)

  return (
    <Box pt={'75px'}>
      <Trending />
      <PlayingNow />
    </Box>
  )
}

export default Player
