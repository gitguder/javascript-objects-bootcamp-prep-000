var playlist = {artist: song}

function updatePlaylist (playlist, artist, song) {
  Object.assign({artist: song}, playlist)
  return playlist
}
