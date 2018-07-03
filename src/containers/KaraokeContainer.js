import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

class KaraokeContainer extends Component {

  state = {
    songList: [],
    selectedSong: null,
    searchTerm: '',
    filteredSongs: null
  }

  componentDidMount() {
    fetch(`https://demo.lovescomputers.com/users/13/songs`).then(resp => resp.json()).then(data => this.setState({songList: data}))
  }

  handlePlay = (id) => {
    let selectedSong = this.state.songList.find(song => song.id === id)

    if (selectedSong !== this.state.selectedSong) {
      selectedSong.plays++

      fetch('https://demo.lovescomputers.com/users/13/songs/' + id + '/play', {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'}
      }).then(res => {
          res.json();
      }).then(this.setState({selectedSong}));
    }
  }

  handleLike = (id) => {
    let newState = this.state.songList.map(song => {
      if (song.id === id) {
        song.likes++
      }
    })

    console.log(newState)

    fetch(`https://demo.lovescomputers.com/users/13/songs/${id}/like`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}
    }).then(this.setState({songList: newState}));
  }

  handleDislike = (id) => {
    let newState = this.state.songList.map(song => {
      if (song.id === id) {
        song.dislikes++
      }
    })

    console.log(newState)

    fetch(`https://demo.lovescomputers.com/users/13/songs/${id}/dislike`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}
    }).then(this.setState({songList: newState}));
  }


  setSearchTerm = (event) => {
    this.setState({searchTerm: event.target.value}, () => this.handleLiveSearch())
  }

  handleLiveSearch = () => {
    let filteredSongs = this.state.songList.filter(song => song.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    this.setState({filteredSongs})
  }

  render() {
    console.log(`in render`, this.state.filteredSongs)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter setSearchTerm={this.setSearchTerm} searchTerm={this.state.searchTerm} />
          <SongList songs={(this.state.filteredSongs !== null)? this.state.filteredSongs : this.state.songList} handlePlay={this.handlePlay}/>
        </div>
        <KaraokeDisplay selectedSong={this.state.selectedSong}
          handleLike={this.handleLike} handleDislike={this.handleDislike}/>
      </div>
    );
  }
}

export default KaraokeContainer;
