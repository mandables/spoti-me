import React, { Component } from "react";
import "./App.scss";
import API from "./adapters/API";
import Results from "./components/Results";
import Search from "./components/Search";

export default class App extends Component {
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
      <div className="App">
        <Search setResults={this.setResults} />
        {this.state.results ? <Results results={this.state.results} /> : null}
      </div>
    );
  }
}
