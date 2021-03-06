import React from 'react'
import { useTransition, animated } from 'react-spring'

import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { Avatar, Box, Stack, useTheme } from '@mui/material'

import { Track } from '../../types'
import ArtistDisplay from '../PlayingNow/ArtistDisplay'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  track: Track
}

const Kiosk = ({ open, setOpen, track }: Props) => {
  const { palette } = useTheme()
  const transitions = useTransition(track, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
    >
      <IconButton
        onClick={() => setOpen(false)}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
        }}
      >
        <CloseIcon sx={{ color: palette.common.white }} />
      </IconButton>
      <Box
        height={'100%'}
        sx={{
          backgroundImage: `linear-gradient(45deg, ${track.colors.accent}, ${track.colors.primary})`,
        }}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {transitions((style) => (
          <animated.div style={style}>
            <Stack direction={'row'} spacing={2} alignItems={'center'}>
              <Avatar
                src={track.image_url}
                variant={'rounded'}
                sx={{ height: '250px', width: '250px' }}
              />
              <Stack spacing={1}>
                <Typography
                  variant='h1'
                  sx={{ color: palette.common.white }}
                  maxWidth={'500px'}
                >
                  {track.song_name}
                </Typography>
                <Stack direction={'row'} spacing={2}>
                  {track.artists.map(({ name, uri }) => (
                    <ArtistDisplay name={name} uri={uri} kiosk />
                  ))}
                </Stack>
                <Stack direction={'row'} spacing={1}>
                  <FmdGoodIcon sx={{ color: palette.common.white }} />
                  <Typography
                    variant='caption'
                    sx={{ color: palette.common.white }}
                  >
                    Soundtrack HQ - Kitchen
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </animated.div>
        ))}
      </Box>
    </Dialog>
  )
}

export default Kiosk
