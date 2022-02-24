import React from 'react'
import { Box, Paper, useTheme } from '@mui/material'

interface Props {
  children: JSX.Element
}

const PlayingNowContainer = ({ children }: Props) => {
  const { palette } = useTheme()

  return (
    <Box position={'absolute'} bottom={0} width={'100%'}>
      <Paper
        elevation={0}
        sx={{
          margin: '24px',
          backgroundColor: palette.background.default,
          borderRadius: '24px',
          padding: '24px',
        }}
      >
        {children}
      </Paper>
    </Box>
  )
}

export default PlayingNowContainer
