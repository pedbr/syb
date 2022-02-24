import React, { useMemo } from 'react'
import { Box, Typography, useTheme } from '@mui/material'

import ScrobbleApi from '../api/scrobble-api'
import { DEFAULT_ZONE_ID } from '../constants'

import PlayingNow from '../components/PlayingNow'

const Player = () => {
  const api = useMemo(() => new ScrobbleApi(DEFAULT_ZONE_ID), [])
  const { palette } = useTheme()

  const fetchData = api.fetchHistory()

  return (
    <Box pt={'75px'}>
      <Typography variant='h1' sx={{ color: palette.text.primary }}>
        Player
      </Typography>
      <PlayingNow />
    </Box>
  )
}

export default Player
