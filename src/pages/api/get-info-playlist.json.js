export async function GET({ params, request }) {
  const response = await fetch(`https://imanol-llona-music-files.pages.dev/data.json?cache_bust=${Date.now()}`);
  const data = await response.json();

  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get('id');

  const playlist = data.playlists.find((playlist) => playlist.id === id);
  const songs = data.songs.filter(song => song.albumId === playlist?.albumId);

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { "content-type": "application/json" },
  });
}
