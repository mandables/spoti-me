import React, { Component } from "react";
import "./App.css";
import API from "./adapters/API";
import Results from "./components/Results";

export default class App extends Component {
  state = {
    results: ""
  };
  componentDidMount() {
    API.getToken()
      .then(response => API.search("Bullets", response.access_token))
      .then(response => {
        console.log(response);
        this.setState({
          results: this.extractReleventData(response.tracks.items)
        });
      });
  }

  extractReleventData = response => {
    let results = [];
    response.map(item => {
      let result = Object.assign(
        {},
        { name: item.name },
        { artist: item.artists[0].name },
        { album: item.album.name },
        { popularity: item.popularity }
      );
      return results.push(result);
    });
    return results;
  };
  render() {
    return (
      <div className="App">
        <Results results={this.state.results} />
      </div>
    );
  }
}
