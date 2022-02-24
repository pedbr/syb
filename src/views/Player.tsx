import React, { useEffect, useMemo, useState } from 'react'
import { Box, Button, Typography, useTheme } from '@mui/material'
import ScrobbleApi from '../api/scrobble-api'
import { DARK_THEME, DEFAULT_ZONE_ID, LIGHT_THEME } from '../constants'
import useStore from '../store'

interface Track {
  song_name: string
}

const Player = () => {
  const [playingNow, setPlayingNow] = useState<Track | null>()
  const api = useMemo(() => new ScrobbleApi(DEFAULT_ZONE_ID), [])
  const { palette } = useTheme()
  const { theme, setTheme } = useStore()

  console.log('theme', theme)

  const fetchData = api.fetchHistory()

  useEffect(() => {
    api.subscribe(setPlayingNow)
  }, [api])

  console.log(fetchData)
  return (
    <Box
      sx={{
        backgroundColor: palette.background.paper,
        height: '100vh',
      }}
    >
      <Typography variant='h1' sx={{ color: palette.text.primary }}>
        {playingNow?.song_name}
      </Typography>
      <Button
        onClick={() =>
          setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)
        }
      >
        Toggle theme
      </Button>
    </Box>
  )
}

export default Player
