import React, { Component } from "react";
import Search from "../components/Search";
import Results from "../components/Results";
import PlaylistTable from '../components/PlaylistTable'
import API from "../adapters/API";

export default class Playlists extends Component {
  state = {
    results: "",
    playlists: [],
    selectedPlaylists: []
  };

  componentDidMount() {
    API.refreshToken()
    .then(data => this.grabUserInfo(data.access_token))
  }

  addToSelectedPlaylists = id => {
    this.state.selectedPlaylists.includes(id) ? 
    this.setState({selectedPlaylists: this.state.selectedPlaylists.filter(playlist => playlist !== id)}) : 
    this.setState({selectedPlaylists: [...this.state.selectedPlaylists, id]})
  }
  
  grabUserInfo = (token) => {
		let url = 'https://api.spotify.com/v1/me/playlists';
		API.fetchInfo(url, token).then((playlists) => {
			this.setState({playlists: playlists.items})
		});
	};

  setResults = results => {
    this.setState({
      results
    });
  };
  render() {
    return (
      <>
        <Search setResults={this.setResults} />
        {this.state.results ? <Results results={this.state.results} /> : null}
        <PlaylistTable selectPlaylist={this.addToSelectedPlaylists} playlists={this.state.playlists}/>
      </>
    );
  }
}
