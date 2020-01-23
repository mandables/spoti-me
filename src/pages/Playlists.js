import React, { Component } from "react";
import Search from "../components/Search";
import Results from "../components/Results";

export default class Playlists extends Component {
  state = {
    results: ""
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
      </>
    );
  }
}
