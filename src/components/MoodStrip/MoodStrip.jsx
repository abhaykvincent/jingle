import React from 'react'

function MoodStrip(props) {
  let playlist = props.playlist;
  let tracks = props.tracks;
  console.log(tracks)
  
    return (
        <div className="mood">
          <div className="label-sub"><h3>{playlist.name}</h3></div>
          <div className="mood-strip">
            <div className="song">Pop Lorem, ipsum.</div>
            <div className="song">Hip Pop Lorem.</div>
            <div className="song">EDM</div>
            <div className="song">Jazz Lorem, ipsum dolor.</div>
            <div className="song">Trance</div>
            <div className="song">Classic</div>
          </div>
        </div>
    )
}

export default MoodStrip
