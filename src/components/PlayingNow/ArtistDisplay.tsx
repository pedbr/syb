import React from 'react'
import { Stack, Typography, useTheme } from '@mui/material'
import PersonPinIcon from '@mui/icons-material/PersonPin'

interface Props {
  uri: string
  name: string
  kiosk?: boolean
}

const ArtistDisplay = ({ uri, name, kiosk }: Props) => {
  const { palette } = useTheme()

  return (
    <Stack key={uri} direction={'row'} spacing={1}>
      <PersonPinIcon
        sx={{ color: kiosk ? palette.common.white : palette.text.primary }}
      />
      <Typography
        variant='caption'
        sx={{ color: kiosk ? palette.common.white : palette.text.primary }}
      >
        {name}
      </Typography>
    </Stack>
  )
}

export default ArtistDisplay
