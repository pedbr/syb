import React, { Fragment, useEffect, useMemo, useState } from 'react'
import {
  Avatar,
  IconButton,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import FmdGoodIcon from '@mui/icons-material/FmdGood'

import ScrobbleApi from '../../api/scrobble-api'
import { Track } from '../../types'
import { DEFAULT_ZONE_ID } from '../../constants'

import PlayingNowContainer from './PlayingNowContainer'
import Kiosk from '../Kiosk'
import ArtistDisplay from './ArtistDisplay'

const PlayingNow = () => {
  const [isPlay, setPlay] = useState(true)
  const [isKioskOpen, setKioskOpen] = useState(false)
  const { palette } = useTheme()
  const [playingNow, setPlayingNow] = useState<Track | null>()
  const api = useMemo(() => new ScrobbleApi(DEFAULT_ZONE_ID), [])

  useEffect(() => {
    api.subscribe(setPlayingNow)
  }, [api])

  if (!playingNow) {
    return (
      <PlayingNowContainer>
        <Fragment>
          <Skeleton variant='text' width={'300px'} />
          <Skeleton variant='text' width={'80%'} height={'120px'} />
        </Fragment>
      </PlayingNowContainer>
    )
  }

  return (
    <PlayingNowContainer>
      <Fragment>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Stack direction={'row'} spacing={3}>
            <Stack direction={'row'} spacing={1}>
              <GraphicEqIcon />
              <Typography variant='body2' sx={{ color: palette.primary.main }}>
                Playing now
              </Typography>
            </Stack>
            <Stack direction={'row'} spacing={1}>
              <FmdGoodIcon />
              <Typography variant='body2' sx={{ color: palette.primary.main }}>
                Soundtrack HQ - Kitchen
              </Typography>
            </Stack>
          </Stack>
          <IconButton onClick={() => setKioskOpen(true)}>
            <OpenInFullIcon
              fontSize={'small'}
              sx={{ color: palette.text.primary }}
            />
          </IconButton>
        </Stack>

        <Stack
          alignItems={'center'}
          direction={'row'}
          justifyContent={'space-between'}
        >
          <Stack alignItems={'center'} direction={'row'} spacing={2} mt={2}>
            <Avatar
              src={playingNow?.image_url}
              variant={'rounded'}
              sx={{ width: 72, height: 72 }}
            />
            <Stack maxWidth={'75vw'}>
              <Typography
                variant='h1'
                sx={{ color: palette.text.primary }}
                textOverflow={'ellipsis'}
                whiteSpace={'nowrap'}
                overflow={'hidden'}
              >
                {playingNow?.song_name || 'Waiting'}
              </Typography>
              <Stack direction={'row'} spacing={2}>
                {playingNow?.artists.map(({ name, uri }) => (
                  <ArtistDisplay name={name} uri={uri} />
                ))}
              </Stack>
            </Stack>
          </Stack>
          <IconButton onClick={() => setPlay(!isPlay)}>
            {isPlay ? (
              <PauseCircleIcon
                sx={{ fontSize: '72px', color: palette.text.primary }}
              />
            ) : (
              <PlayCircleIcon
                sx={{ fontSize: '72px', color: palette.text.primary }}
              />
            )}
          </IconButton>
        </Stack>
        <Kiosk open={isKioskOpen} setOpen={setKioskOpen} track={playingNow} />
      </Fragment>
    </PlayingNowContainer>
  )
}

export default PlayingNow
