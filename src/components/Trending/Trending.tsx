import React, { useMemo, useState } from 'react'
import {
  Box,
  Button,
  Snackbar,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import QueueIcon from '@mui/icons-material/Queue'

import ScrobbleApi from '../../api/scrobble-api'
import { DEFAULT_ZONE_ID, LIGHT_THEME } from '../../constants'
import useStore from '../../store'
import { Artists } from '../../types'

interface Scrobble {
  image_url: string
  artists: Artists[]
  song_name: string
}

const Trending = () => {
  const [isToastOpen, setToastOpen] = useState(false)
  const { palette, typography } = useTheme()
  const { theme } = useStore()

  const api = useMemo(() => new ScrobbleApi(DEFAULT_ZONE_ID), [])
  const initialScrobble: Scrobble = api.mockScrobble()

  const [scrobble, setScrobble] = useState<Scrobble>(initialScrobble)

  return (
    <Box p={'24px'}>
      <Typography
        ml={'16px'}
        mb={'8px'}
        variant='subtitle1'
        sx={{ color: palette.text.primary }}
      >
        Trending 🔥
      </Typography>
      <Box
        sx={{
          height: '300px',
          width: '300px',
          backgroundImage: `url(${scrobble.image_url})`,
          backgroundSize: 'cover',
          borderRadius: '24px',
        }}
      >
        <Box
          p={2}
          sx={{
            height: '270px',
            backgroundColor:
              theme === LIGHT_THEME
                ? 'rgba(255,255,255, 0.6)'
                : 'rgba(0,0,0, 0.8)',
            borderRadius: '24px',
          }}
        >
          <Typography variant='h2' sx={{ color: palette.primary.main }}>
            {scrobble.artists[0].name}
          </Typography>
          <Typography variant='h3' sx={{ color: palette.text.primary }}>
            {scrobble.song_name}
          </Typography>
        </Box>
      </Box>
      <Stack direction={'row'} spacing={2} mt={1}>
        <Button
          variant={'outlined'}
          onClick={() => setScrobble(api.mockScrobble())}
          sx={{
            fontFamily: typography.caption,
            borderRadius: '12px',
            borderWidth: '3px',
            borderColor: palette.primary.main,
            textTransform: 'none',
            '&:hover': {
              borderWidth: '3px',
            },
          }}
        >
          Shuffle
          <ShuffleIcon fontSize='small' sx={{ marginLeft: '8px' }} />
        </Button>
        <Button
          variant={'contained'}
          disableElevation
          onClick={() => setToastOpen(true)}
          sx={{
            color: palette.common.black,
            fontFamily: typography.caption,
            borderRadius: '12px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'rgba(255,191, 0, 0.7)',
            },
          }}
        >
          Add to queue
          <QueueIcon
            fontSize='small'
            sx={{ color: palette.common.black, marginLeft: '8px' }}
          />
        </Button>
      </Stack>
      <Snackbar
        open={isToastOpen}
        autoHideDuration={2000}
        onClose={() => setToastOpen(false)}
        message='Scrobble queued 🎉'
      />
    </Box>
  )
}

export default Trending
