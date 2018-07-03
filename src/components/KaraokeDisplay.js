import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      {(props.selectedSong !== null) ? <div>
          <button onClick={() => props.handleLike(props.selectedSong)}>Like</button>
          <button>Dislike</button>
        </div> : undefined}
      <h2>{(props.selectedSong !== null)? props.selectedSong.title : "Select a song!"}</h2>
      <Lyrics lyrics={(props.selectedSong !== null)? props.selectedSong.lyrics : undefined} />
    </div>
  )
}

export default KaraokeDisplay;
