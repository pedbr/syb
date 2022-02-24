export interface Artists {
  name: string
  uri: string
}

interface Colors {
  accent: string
  primary: string
}

export interface Track {
  song_name: string
  image_url: string
  artists: Artists[]
  colors: Colors
}
