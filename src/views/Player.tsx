import React, { useEffect, useMemo } from 'react'
import { Box, Stack } from '@mui/material'

import ScrobbleApi from '../api/scrobble-api'
import { DEFAULT_ZONE_ID } from '../constants'
import useStore from '../store'

import PlayingNow from '../components/PlayingNow'
import Trending from '../components/Trending'
import History from '../components/History'

const Player = () => {
  const api = useMemo(() => new ScrobbleApi(DEFAULT_ZONE_ID), [])
  const { setTrackHistory, currentlyPlaying } = useStore()

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await api.fetchHistory()
        if (data) {
          setTrackHistory(data)
        } else {
          throw new Error()
        }
      } catch (error) {
        console.error(`Not possible to load history - Error: ${error}`)
      }
    }
    fetchHistory()
  }, [api, setTrackHistory, currentlyPlaying])

  return (
    <Box pt={'75px'}>
      <Stack direction={'row'} spacing={5}>
        <Trending />
        <History />
      </Stack>
      <PlayingNow />
    </Box>
  )
}

export default Player
