import { colors } from './colors'

export interface Playlist {
  id: string | number
  albumId: number
  title: string
  color: (typeof colors)[keyof typeof colors]
  cover: string
  artists: string[]
  duration: string
  releaseYear: string
  releaseMonth: string
  releaseDay: string
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: 'Chill Lo-Fi Music',
    color: colors.yellow,
    cover:
      'https://imanol-llona-music-files.pages.dev/2024-11-01/cover.jpg',
    artists: ['NoSpirit', 'Casiio'],
    duration: '14 min 43 sec',
    releaseYear: '2020',
    releaseMonth: 'November',
    releaseDay: '26',
  },
  {
    id: '2',
    albumId: 2,
    title: 'Lo-Fi Chill Session',
    color: colors.green,
    cover:
      'https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187',
    artists: ['Kupla', 'Blue Fox'],
    duration: '14 min 30 sec',
    releaseYear: '2019',
    releaseMonth: 'September',
    releaseDay: '13',
  }
]

export const morePlaylists = playlists.map(item => ({
  ...item,
  id: item.id + '_more',
}))

export const sidebarPlaylists = playlists.map(item => ({
  ...item,
  id: item.id + '_side',
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number
  albumId: number
  url: string
  title: string
  image: string
  artists: string[]
  album: string
  duration: string
}

export const songs: Song[] = [
  {
    id: 1,
    albumId: 1,
    url: "https://imanol-llona-music-files.pages.dev/2024-11-01/034.mp3",
    title: 'Moonlit Walk',
    image: `https://imanol-llona-music-files.pages.dev/2024-11-01/cover.jpg`,
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music222',
    duration: '2:57',
  },
  {
    id: 2,
    albumId: 1,
    url: "https://imanol-llona-music-files.pages.dev/2024-11-01/170.mp3",
    title: 'Coffee Daze',
    image: `https://imanol-llona-music-files.pages.dev/2024-11-01/cover.jpg`,
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:40',
  },
  {
    id: 3,
    albumId: 1,
    url: "https://imanol-llona-music-files.pages.dev/2024-11-01/171.mp3",
    title: 'Skyline Serenade',
    image: `https://imanol-llona-music-files.pages.dev/2024-11-01/cover.jpg`,
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '3:29',
  },
  {
    id: 4,
    albumId: 1,
    url: "https://imanol-llona-music-files.pages.dev/2024-11-01/172.mp3",
    title: 'Urban Echoes',
    image: `https://imanol-llona-music-files.pages.dev/2024-11-01/cover.jpg`,
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '2:11',
  },
  {
    id: 5,
    albumId: 1,
    url: "https://imanol-llona-music-files.pages.dev/2024-11-01/173.mp3",
    title: "Night's End",
    image: `https://imanol-llona-music-files.pages.dev/2024-11-01/cover.jpg`,
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '2:26',
  },
  {
    id: 6,
    albumId: 1,
    url: "https://imanol-llona-music-files.pages.dev/2024-11-01/174.mp3",
    title: "Night's End",
    image: `https://imanol-llona-music-files.pages.dev/2024-11-01/cover.jpg`,
    artists: ['LoFi Dreamer'],
    album: 'Chill Lo-Fi Music',
    duration: '2:26',
  },
  {
    id: 1,
    albumId: 2,
    url: "https://imanol-llona-music-files.pages.dev/2024-11-01/034.mp3",
    title: 'Silent Rain',
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ['Urban Nocturne'],
    album: 'Midnight Tales',
    duration: '2:38',
  },
  {
    id: 2,
    albumId: 2,
    url: "https://imanol-llona-music-files.pages.dev/2024-11-01/034.mp3",
    title: 'Lost Pages',
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ['Urban Nocturne'],
    album: 'Midnight Tales',
    duration: '2:40',
  }
]
