import React, { Component } from "react";
import Search from "../components/Search";
import Results from "../components/Results";
import PlaylistTable from "../components/PlaylistTable";
import API from "../adapters/API";
import "../stylesheets/playlists.scss";

export default class Playlists extends Component {
  state = {
    results: "",
    playlists: [],
    selectedPlaylists: []
  };

  componentDidMount() {
    API.refreshToken().then(data => this.grabUserInfo(data.access_token));
  }

  addSongToPlaylists = uri => {
    if (this.state.selectedPlaylists.length !== 0) {
      let promises = this.state.selectedPlaylists.map(playlist => {
        return API.addSong(playlist, uri);
      });
      Promise.all(promises).then(() => alert("Done"));
    } else {
      alert("No playlists selected");
    }
  };

  addPlaylistToState = id => {
    this.state.selectedPlaylists.includes(id)
      ? this.setState({
          selectedPlaylists: this.state.selectedPlaylists.filter(
            playlist => playlist !== id
          )
        })
      : this.setState({
          selectedPlaylists: [...this.state.selectedPlaylists, id]
        });
  };

  grabUserInfo = token => {
    let url = "https://api.spotify.com/v1/me/playlists";
    API.fetchInfo(url, token).then(playlists => {
      this.setState({ playlists: playlists.items });
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
        <div className="playlists-container">
          <div className="search-container">
            <Search setResults={this.setResults} />
          </div>
          {this.state.results ? (
            <Results
              addSongToPlaylists={this.addSongToPlaylists}
              results={this.state.results}
            />
          ) : (
            <div className="placeholder"></div>
          )}
        </div>
        <PlaylistTable
          selectPlaylist={this.addPlaylistToState}
          playlists={this.state.playlists}
        />
      </>
    );
  }
}
