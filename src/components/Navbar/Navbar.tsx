import React from 'react'
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SearchIcon from '@mui/icons-material/Search'

import useStore from '../../store'
import { DARK_THEME, LIGHT_THEME, PROFILE_PIC } from '../../constants'

const Navbar = () => {
  const { palette, typography } = useTheme()
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
        zIndex: 2,
      }}
    >
      <Stack ml={'20px'} direction={'row'}>
        <AudiotrackIcon fontSize='large' sx={{ color: palette.primary.dark }} />
        <Typography variant='h3' sx={{ color: palette.primary.dark }}>
          Audiotrack
        </Typography>
      </Stack>
      <Stack mr={'30px'} direction={'row'} spacing={3} alignItems={'center'}>
        <TextField
          InputProps={{
            startAdornment: (
              <SearchIcon
                sx={{ color: palette.grey[600], marginRight: '16px' }}
              />
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '16px',
              height: '36px',
              '& input': {
                fontWeight: typography.caption,
                fontSize: typography.caption,
              },
            },
          }}
        />
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
          <Avatar
            alt='Pedro Bras'
            src={PROFILE_PIC}
            sx={{ width: 36, height: 36 }}
          />
          <Typography sx={{ color: palette.primary.dark }} variant='caption'>
            Pedro Brás
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar
