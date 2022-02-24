export interface Artists {
  name: string
  uri: string
}

interface Colors {
  accent: string
  primary: string
}

export interface Track {
  id: string
  song_name: string
  image_url: string
  artists: Artists[]
  colors: Colors
  channel_name: string
  duration_ms: number
  created_at: string
}
