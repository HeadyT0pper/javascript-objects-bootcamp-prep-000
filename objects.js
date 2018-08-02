var playlist = {
  MichaelBuble: 'Home',
  FrankSinatra: 'Young at Heart'
}
function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}
function removeFromPlaylist(obj, key, value) {
  obj[key] = value
  
}