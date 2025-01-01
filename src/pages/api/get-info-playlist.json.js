export async function GET({ params, request }) {
  const response = await fetch(`https://imanol-llona-music-files.pages.dev/data.json?cache_bust=${Date.now()}`);
  const data = await response.json();

  const urlObject = new URL(request.url);
  const id = urlObject.searchParams.get('id');

  if (!id) {
    return new Response(JSON.stringify({ error: "Playlist ID is required" }), { status: 400 });
  }

  const playlist = data.playlists.find((playlist) => playlist.albumId == id);
  if (!playlist) {
    return new Response(JSON.stringify({ error: "Playlist not found" }), { status: 404 });
  }

  const songs = data.songs.filter(song => song.albumId === playlist.albumId);

  return new Response(JSON.stringify({ playlist, songs }), {
    headers: { "content-type": "application/json" },
  });
}
