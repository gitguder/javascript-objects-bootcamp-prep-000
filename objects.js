var playlist = {'artist name': 'song title'}

function updatePlaylist (playlist, artistName, songTitle) {
  Object.assign(playlist, {artistName: songTitle})
  return playlist
}
