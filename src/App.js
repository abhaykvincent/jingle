import { useEffect, useState } from 'react'
import './App.scss'
import MoodStrip from './components/MoodStrip/MoodStrip';
    // Components
    const clientId = '71718d4539da4aa09be9d0d9acd95472';
    const clientSecret = '55790833a6d5444fbf93400c887d0144';

    // private methods

    // get TOKEN from spotify account
    // returns token string
    const _getToken = async () => {
        //fetch call
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        const token =data.access_token;
        return token;
    }

    //Categories
    const __getGenres = async () => {
      // #️⃣  receving token from spotify
      const token = await _getToken();
      // 🕊 fetch call - categories
      const categories = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
      });

      //calling categories API 🕊   and parsing
      const genres = await categories.json();
      console.log(genres.categories.items);
      //
      //CATEGORY ARRAY
      return genres.categories.items;
    }
    const __getPlayList = async (category_id) => {
      // #️⃣  receving token from spotify
      const token = await _getToken();
      // 🕊 fetch call - playlist
      const result = await fetch(`https://api.spotify.com/v1/browse/categories/${category_id}/playlists`, {
        method: 'GET',
         headers: { 'Authorization' : 'Bearer ' + token}
      });


      //calling playlist API 🕊   and parsing
      const playlist = await result.json();
      console.log(playlist);
      //
      //PLAYLIST ARRAY
      return playlist;
    }

    // Featured Playlists
    const __getFeaturedPlayList = async () => {

      // #️⃣  receving token from spotify
      const token = await _getToken();
      // 🕊 fetch call - playlist
      const result = await fetch(`https://api.spotify.com/v1/browse/featured-playlists`, {
        method: 'GET',
         headers: { 'Authorization' : 'Bearer ' + token}
      });

      //calling playlist API 🕊   and parsing
      const playlist = await result.json();
      //
      //PLAYLIST ARRAY
      return playlist;
    }
    // Featured Playlists
    const __getPlayListById = async (id) => {

    // #️⃣  receving token from spotify
    const token = await _getToken();
    // 🕊 fetch call - playlist
    const result = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      method: 'GET',
       headers: { 'Authorization' : 'Bearer ' + token}
    });

    //calling playlist API 🕊   and parsing
    const playlist = await result.json();
    console.log(playlist)
    //
    //PLAYLIST ARRAY
    return playlist;
  }

    
    


function App() {

  // 📦 STATES

  // view
  const [isExpandView, setIsExpandView] = useState(true)
  const [viewClass, setViewClass] = useState('')
  // model
  const [isExpandModel, setIsExpandModel] = useState(true)
  const [modelClass, setModelClass] = useState('')
  //Genres
  const [genres, setGenres] = useState([])
  //
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [currentPlaylistTracks, setCurrentPlaylistTracks] = useState([]);
  const [playlistTracksHtml, setPlaylistTracksHtml] = useState();

  // Featured Playlist
  const [featuredPlaylist, setFeaturedPlaylist] = useState(null);
  const [featuredPlaylistHTML, setFeaturedPlaylistHTML] = useState(null);

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

  useEffect(() => {

    // Categories //
    // 📦  Storing genre list for set state
    const getGenreList = async () => {
      //🧲 reciving genre list through API  via __getGenres call
      const genreList = await __getGenres();
      //console.log(genreList)
      return genreList;
    }
    //  📦 genre set state
    getGenreList().then((genreData)=>{
      // 📦
      setGenres(genreData)
    })

    // Featured Playlist //
    // 📦  Storing genre list for set state
    const getFeaturedPlaylist = async () => {
      //🧲 reciving genre list through API  via __getGenres call
      const featuredPlaylist = await __getFeaturedPlayList()
      //console.log(genreList)
      return featuredPlaylist;
    }
    //  📦 genre set state
    getFeaturedPlaylist().then((featuredPlaylistData)=>{
      // 📦
      setFeaturedPlaylist(featuredPlaylistData.playlists.items)
    })
      
    return () => {
    }
  }, []);

  //on featuredPlaylist Stored in State
  useEffect(() => {
    // check to see if its the initial state
    if( currentPlaylist === null ){
      // first load, set cart to real initial state, after load
      console.log('Featured Playlist Loading ...')
    }else
      console.log(currentPlaylist )
  }, [currentPlaylist]);

  //on featuredPlaylist Stored in State
  useEffect(() => {
    // check to see if its the initial state
    if( featuredPlaylist === null ){
      // first load, set cart to real initial state, after load
      console.log('Featured Playlist Loading ...')
    }
    else{
      console.log(featuredPlaylist)
      let featuredPlaylistHTMLtemp =[]
      


      Promise.all(
        featuredPlaylist.map((data) => {
          const getTracksList = async () => {
            const tracks = await __getPlayListById(data.id);
            return tracks.tracks.items;
          }

          getTracksList()
          .then(tracks=>{

            featuredPlaylistHTMLtemp.push( <MoodStrip playlist={data} tracks={tracks} key={data.id}/>)
            
            setFeaturedPlaylistHTML(featuredPlaylistHTMLtemp)
          })
            .catch(()=>{
              console.log('getTracksList() Err')
            })
        }))
        .then(()=>{
            return
            })

          }
        }, [featuredPlaylist,featuredPlaylistHTML]);

  // 💀 Genre strip HTML
  const genresHtml = genres.map(genre => {
    return <div className="genre"
      onClick={()=>{
          expandView();
          console.log(genre)
          // setSTATE current playlist to clicked genre
          setCurrentPlaylist(genre);
          //  GET  playlist 
          const getPlaylist = async () => {
            const playlistt = await __getPlayList(genre.id);
            return playlistt;
          }
          // 🧲 get playlist call
          getPlaylist()
          .then((playlistData)=>{
            let playlistTracks = playlistData.playlists.items
            // 📦 setSTATE Playlist tracks data 
            setCurrentPlaylistTracks(playlistTracks);

            // 💀 Playlist Tracks - COMPONENT
            const playlistTracksHtmlTemp = playlistTracks.map(track => {
              return <TrackSmallThumbnail track={track}/>
            })
            // 📦 setSTATE Playlist Track markup
            setPlaylistTracksHtml(playlistTracksHtmlTemp)
          })
          
      }}>
        <div className="genre-icon" style={{backgroundImage: `url(${genre.icons[0].url})`}}></div>
        {genre.name}
      </div>
  })

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
            {genresHtml}
          </div>
        </div>
        
        <div className="shelf-divider"></div>
        {featuredPlaylistHTML}
      </div>
      <div className={`view playlist ${viewClass}`}>
        <div className="view__head">
          <div className="back" 
          onClick={()=>{expandView();}}>)</div>
        </div>
        <div className="view__body">
          <div className="playlist" 
          onClick={()=>{expandModel()}}>
            {playlistTracksHtml}
          </div>
        </div>
      </div>
      <div className={`model player ${modelClass}`}>
        <div className="model__head">
          <div className="back" 
          onClick={()=>{expandModel()}}>)</div></div>
        <div className="model__body">
          <div className="track">
            <div className="album-artwork">
            </div>
            <div className="track-name">
              <div className="spotify-logo">
              
              </div>
              
              <p>Track Name ipsm</p>
              <p className="artist">Lorem ipsum</p>
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
function TrackSmallThumbnail(props) {
  let track = props.track;
  return (
      
    <div className="track">
    <div className="album-artwork"></div>
    <div className="track-name">
      <p>{track.name}</p>
      <p className="artist">{track.description}</p>
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
