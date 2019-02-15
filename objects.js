var playlist = {'artist name': 'song title'}

function updatePlaylist (playlist, artist, song) {
  Object.assign({artist: song}, playlist)
  return playlist
}
