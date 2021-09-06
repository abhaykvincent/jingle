import { useEffect, useState } from 'react'
import {_getToken} from '../../services/spotify'
import {getTracksByPlaylistId} from '../../services/spotify'
// Featured Playlists



function MoodStrip(props) {

  const [songsList, setSongsList] = useState()
  const [songsListHTML, setSongsListHTML] = useState()

  let name = props.playlist.name;
  let expandView=props.expandView;
  let TrackSmallThumbnail=props.TrackSmallThumbnail
  let setPlaylistTracksHtml=props.setPlaylistTracksHtml

  useEffect(() => {

    if(!songsList){
      getTracksByPlaylistId(props.playlist.id)
      .then(songs=>{
        setSongsList(songs.items)
        let songsListHTMLtemp = songs.items.map((song,i) => {
          return <div className="song" onClick={() => {
            props.expandModel()
            console.log(song)
            props.setCurrentTrack(song.track)
          }}>
            <div className="song-image" style={{backgroundImage:`url(${song.track.album.images[1].url})`}}></div>
            <div className="song-name">{song.track.name.slice(0, 30)}</div>
          </div>
        })
        setSongsListHTML(songsListHTMLtemp)
      })


    }

  },[songsList,props]);

  
  
 

    return (
        <div className="mood">
          <div className="label-sub" onClick={()=>{
          expandView();
          let playlistTracks = songsList;

          // 💀 Playlist Tracks - COMPONENT
          const playlistTracksHtmlTemp = playlistTracks.map(track => {

            return <TrackSmallThumbnail track={track.track} expandModel={props.expandModel} setCurrentTrack={props.setCurrentTrack}/>
          })
          // 📦 setSTATE Playlist Track markup
          setPlaylistTracksHtml(playlistTracksHtmlTemp)
          
      }}><h3>{name}</h3></div>
          <div className="mood-strip">
            {songsListHTML}
          </div>
        </div>
    )
}

export default MoodStrip
