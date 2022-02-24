import React from 'react'
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import useStore from '../../store'
import { DARK_THEME, LIGHT_THEME, PROFILE_PIC } from '../../constants'

const Navbar = () => {
  const { palette } = useTheme()
  const { theme, setTheme } = useStore()
  return (
    <Box
      position={'absolute'}
      width={'100%'}
      height={'75px'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{
        backdropFilter: 'blur(8px)',
        zIndex: 2,
      }}
    >
      <Stack ml={'20px'} direction={'row'}>
        <AudiotrackIcon fontSize='large' sx={{ color: palette.primary.dark }} />
        <Typography variant='h3' sx={{ color: palette.primary.dark }}>
          Audiotrack
        </Typography>
      </Stack>
      <Stack mr={'30px'} direction={'row'} spacing={3}>
        <IconButton
          onClick={() =>
            setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)
          }
        >
          {theme === LIGHT_THEME ? (
            <DarkModeIcon sx={{ color: palette.primary.main }} />
          ) : (
            <LightModeIcon sx={{ color: palette.primary.main }} />
          )}
        </IconButton>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <Avatar alt='Pedro Bras' src={PROFILE_PIC} />
          <Typography variant='body2'>Pedro Brás</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar
