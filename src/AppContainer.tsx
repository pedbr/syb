import React from 'react'
import { Box, useTheme } from '@mui/material'

import Navbar from './components/Navbar'

import Player from './views/Player'

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
