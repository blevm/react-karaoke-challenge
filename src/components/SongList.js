import React from 'react';

const SongList = (props) => {

  const allSongs = () => {
    if (props.songs) {
      return props.songs.map(song => (
        <tr>
          <td>{song.title}</td>
          <td>{song.singer}</td>
          <td>{song.likes}</td>
          <td>{song.dislikes}</td>
          <td>{song.plays}</td>
          <td><button onClick={() => {props.handlePlay(song.id)}}>Play</button></td>
        </tr>
      )
    )
    }
  }

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Plays</th>
          <th>▶</th>
        </tr>
        {allSongs()}
        {/*props.songs.map(song => (
          <tr>
            <td>{song.title}</td>
            <td>{song.singer}</td>
            <td><button onClick={() => {console.log(song.id)}}>Play</button></td>
          </tr>
        ))*/}

      </tbody>
    </table>
  )
}

export default SongList;
