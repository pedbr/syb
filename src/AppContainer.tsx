import React from 'react'
import { Box, useTheme } from '@mui/material'

import Player from './views/Player'

import Navbar from './components/Navbar'

const AppContainer = () => {
  const { palette } = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: palette.background.paper,
        height: '100vh',
      }}
    >
      <Navbar />
      <Player />
    </Box>
  )
}

export default AppContainer
