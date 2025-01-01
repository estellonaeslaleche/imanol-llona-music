export function getPlayListInfoById(playListId: number) {
  const baseUrl = import.meta.env.DEV
    ? 'http://localhost:4321'
    : 'https://imanol.llonamusic.com';

  return fetch(`${baseUrl}/api/get-info-playlist.json?id=${playListId}`).then(res =>
    res.json()
  );
}
