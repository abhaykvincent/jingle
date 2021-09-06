import {useState,useEffect } from 'react'
import './App.scss'
import MoodStrip from './components/MoodStrip/MoodStrip';
import genreList from './data/genre'
import featuredPlaylistList from './data/featured-playlist'
import {getTracksByPlaylistId} from './services/spotify'
    

    


function App() {

  // 📦 STATES

  // view
  const [isExpandView, setIsExpandView] = useState(true)
  const [viewClass, setViewClass] = useState('')
  // model
  const [isExpandModel, setIsExpandModel] = useState(true)
  const [modelClass, setModelClass] = useState('')

  //Genres
  // eslint-disable-next-line
  const [genres, setGenres] = useState(genreList) 
  const [genreHTML, setGenreHTML] = useState() 
  //
  // eslint-disable-next-line
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  // eslint-disable-next-line
  const [playlistTracksHtml, setPlaylistTracksHtml] = useState();

  // Featured Playlist
  // eslint-disable-next-line
  const [featuredPlaylist, setFeaturedPlaylist] = useState(featuredPlaylistList);


  const [currentTrack, setCurrentTrack] = useState();

  const [songsList, setSongsList] = useState();
  const [songsListHTML, setSongsListHTML] = useState();
  const getCurrentTrackToState =  (id) => {
  }
  //FUNCTIONS

  const expandView =  () => {
    // 🔁 expand state TRANSPOSED
    setIsExpandView(!isExpandView)
    // reaction class CHANGE
    setViewClass(isExpandView ? "expand" : '')
  }
  const expandModel =  () => {
    // 🔁 expand state TRANSPOSED
    setIsExpandModel(!isExpandModel)
    // reaction class CHANGE
    setModelClass(isExpandModel ? "expand" : '')

  
  }

  const moodboardHtml = featuredPlaylist.map((playlist,i) => {
    if (i<5)
      return <MoodStrip playlist={playlist} expandView={expandView}  TrackSmallThumbnail={TrackSmallThumbnail} setPlaylistTracksHtml={setPlaylistTracksHtml} expandModel={expandModel}  setCurrentTrack={setCurrentTrack}/>
    else return ""
  })


  useEffect(() => {

    const genresHtmlTemp = genres.map((genre,i) => {

      if(genre.playlist)
        return <div className="genre"
        onClick={()=>{
            expandView();
  
            let playlistTracks = genre.playlist;
            // 💀 Playlist Tracks - COMPONENT
            const playlistTracksHtmlTemp = playlistTracks.map(track => {
              return <PlaylistSmallThumbnail track={track} setPlaylistTracksHtml={setPlaylistTracksHtml} setSongsListHTML={setSongsListHTML} setSongsList={setSongsList} expandView={expandView} expandModel={expandModel} setCurrentTrack={setCurrentTrack}/>
            })
            // 📦 setSTATE Playlist Track markup
            setPlaylistTracksHtml(playlistTracksHtmlTemp)
            
        }}>
          <div className="genre-icon" style={{backgroundImage: `url(${genre.icons[0].url})`}}></div>
          {genre.name}
        </div>
      else return ""
    })
    console.log("songs updatyed")
    setGenreHTML(genresHtmlTemp)
  },[])

  return (
    <div className="App">
      <div className="home">

        <div className="search">
          <input type="text" name="Search" id="search-home" 
          onClick={()=>{expandView()}}/>
        </div>
        <div className="genres">
          <div className="label-sub"><h3>Top Genres</h3></div>
          <div className="genres-list">
            {genreHTML}
          </div>
        </div>
        
        <div className="shelf-divider"></div>
        {moodboardHtml}
      </div>
      <div className={`view playlist ${viewClass}`}>
        <div className="view__head">
          <div className="back" 
          onClick={()=>{expandView();}}></div>
        </div>
        <div className="view__body">
          <div className="playlist" >
            {playlistTracksHtml}
          </div>
        </div>
      </div>
      <div className={`model player ${modelClass}`}>
        <div className="model__head">
          <div className="back" 
          onClick={()=>{expandModel()}}></div></div>
        <div className="model__body">
          <div className="track">
            <div className="album-artwork" style={{backgroundImage:`url(${currentTrack?currentTrack.album.images[0].url:''})`}}>
            </div>
            <div className="track-name">
              <div className="spotify-logo">
              
              </div>
              
              <p className="track-title">{currentTrack?currentTrack.name:''}</p>
              <p className="artist">{currentTrack?currentTrack.artists[0].name:''}</p>
            </div>
            <div className="play-controls">
              <div className="progress-bar">
                <div className="progress"></div>
                <div className="progress-time">
                  <div className="current-time">3.21</div>
                  <div className="remaining-time">-2.01</div>
                </div>
              </div>
              <div className="main-controls">
                <div className="controls">
                  <div className="control"></div>
                  <div className="control">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <path xmlns="http://www.w3.org/2000/svg" id="Video_Play" data-name="Video Play" d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.52,12.52,0,0,0,12.5,0Zm5.26,12.92-8,5A.56.56,0,0,1,9.5,18a.5.5,0,0,1-.24-.06A.51.51,0,0,1,9,17.5V7.5a.51.51,0,0,1,.26-.44.49.49,0,0,1,.51,0l8,5a.49.49,0,0,1,0,.84Z" fill="#0e1d25"/>
                  </svg>
                  </div>
                  <div className="control next">
                  <svg width="327" height="327" viewBox="0 0 327 327" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M102.605 75.993C102.486 69.8357 109.077 65.8586 114.469 68.8341L269.731 154.517C275.123 157.492 275.271 165.189 269.999 168.37L118.164 259.99C112.891 263.172 106.152 259.453 106.033 253.295L102.605 75.993Z" fill="black"/>
                    <line x1="271.5" y1="66.5" x2="271.5" y2="258.5" stroke="black" stroke-width="33" stroke-linecap="round"/>
                  </svg>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function PlaylistSmallThumbnail(props) {
  let track = props.track;
  
  return (
    <div className="track" onClick={()=>{
      let songsListHTMLtemp ;
      props.expandView()

      getTracksByPlaylistId(track.id)
      .then(songs=>{
         songsListHTMLtemp = songs.items.map((song,i) => {

          return <div className="track" onClick={() => {
            props.expandModel()
            props.setCurrentTrack(song.track)
            debugger
          }}>

            <div className="album-artwork" style={{backgroundImage:`url(${song.track.album.images[1].url})`}}></div>
            <div className="track-name">{song.track.name.slice(0, 30)}</div>
          </div>
        })

        props.setPlaylistTracksHtml(songsListHTMLtemp)
        props.expandView()
      })
      .catch(() => {
        console.log('error')
        return "" })
    }

      }>
      <div className="album-artwork" style={{backgroundImage:`url(${track.images[0].url})`}}></div>
      <div className="track-name">
        <p>{track.name}Test</p>
        <p className="artist">{/* {track.artists[0].name} */}</p>
      </div>
      <div className="play-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path xmlns="http://www.w3.org/2000/svg" id="Video_Play" data-name="Video Play" d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.52,12.52,0,0,0,12.5,0Zm5.26,12.92-8,5A.56.56,0,0,1,9.5,18a.5.5,0,0,1-.24-.06A.51.51,0,0,1,9,17.5V7.5a.51.51,0,0,1,.26-.44.49.49,0,0,1,.51,0l8,5a.49.49,0,0,1,0,.84Z" fill="#0e1d25"/>
        </svg>
      </div>
    </div>
  )
}
function TrackSmallThumbnail(props) {
  let track = props.track;
  console.log('testttttt')
  return (
    <div className="track" onClick={()=>{
      props.expandModel()
      props.setCurrentTrack(track)
    }

      }>
      <div className="album-artwork" style={{backgroundImage:`url(${track.album.images[0].url})`}}></div>
      <div className="track-name">
        <p>{track.name}</p>
        <p className="artist">{track.artists[0].name}</p>
      </div>
      <div className="play-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path xmlns="http://www.w3.org/2000/svg" id="Video_Play" data-name="Video Play" d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.52,12.52,0,0,0,12.5,0Zm5.26,12.92-8,5A.56.56,0,0,1,9.5,18a.5.5,0,0,1-.24-.06A.51.51,0,0,1,9,17.5V7.5a.51.51,0,0,1,.26-.44.49.49,0,0,1,.51,0l8,5a.49.49,0,0,1,0,.84Z" fill="#0e1d25"/>
        </svg>
      </div>
    </div>
  )
}

export default App;
