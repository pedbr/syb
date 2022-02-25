import React from 'react'
import {
  Avatar,
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material'
import RelativeTime from 'react-relative-time'

import useStore from '../../store'
import { millisToMinutesAndSeconds } from '../../utils'

import ArtistDisplay from '../PlayingNow/ArtistDisplay'
import TableCell from './TableCell'

const History = () => {
  const { palette } = useTheme()
  const { trackHistory } = useStore()

  const sortedTrackHistory = trackHistory.sort((a, b) =>
    a.created_at < b.created_at ? 1 : b.created_at < a.created_at ? -1 : 0
  )

  return (
    <Box p={'24px'} mb={10}>
      <Typography variant={'h3'} sx={{ color: palette.text.primary }} mb={3}>
        Recently Played
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 'calc(100vh - 400px)',
          borderRadius: '24px',
          borderColor: palette.text.primary,
          backgroundColor: palette.background.default,
        }}
        elevation={0}
      >
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell head>{''}</TableCell>
              <TableCell head>Song</TableCell>
              <TableCell head>Artist</TableCell>
              <TableCell head>Time</TableCell>
              <TableCell head>Channel</TableCell>
              <TableCell head>Played at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedTrackHistory.map((track) => (
              <TableRow
                key={track.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell head>
                  <RelativeTime value={track.created_at} />
                </TableCell>
                <TableCell component='th' scope='row'>
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Avatar src={track.image_url} variant={'rounded'} />
                    <Typography variant={'caption'}>
                      {track.song_name}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction={'row'} flexWrap={'wrap'}>
                    {track.artists.map((artist) => (
                      <Box key={artist.uri} mr={1} mb={1}>
                        <ArtistDisplay name={artist.name} uri={artist.uri} />
                      </Box>
                    ))}
                  </Stack>
                </TableCell>
                <TableCell>
                  {millisToMinutesAndSeconds(track.duration_ms)}
                </TableCell>
                <TableCell>{track.channel_name}</TableCell>
                <TableCell>
                  {new Date(track.created_at).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default History
