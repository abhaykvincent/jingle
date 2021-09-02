import React from 'react'
import {_getToken} from '../../services/spotify'

// Featured Playlists
const getTracksByPlaylistId = async (id) => {

  // #️⃣  receving token from spotify
  const token = await _getToken();
  // 🕊 fetch call - playlist
  const result = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
    method: 'GET',
     headers: { 'Authorization' : 'Bearer ' + token}
  });

  //calling playlist API 🕊   and parsing
  const playlist = await result.json();
  //
  console.log(playlist)
  //PLAYLIST ARRAY
  return playlist;
}
function MoodStrip(props) {

  
  let name = props.playlist.name;
  let songsList = getTracksByPlaylistId(props.playlist.id);

  console.log(songsList)
  /* const songsListHTML = songsList.map((song,i) => {
    console.log(song)
    return 
    <div className="song">Pop Lorem, ipsum.</div>
  })
*/
  getTracksByPlaylistId(props.playlist.id) 
    return (
        <div className="mood">
          <div className="label-sub"><h3>{name}</h3></div>
          <div className="mood-strip">
          </div>
        </div>
    )
}

export default MoodStrip
