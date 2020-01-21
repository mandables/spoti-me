import React, { Component } from "react";
import "./App.scss";
import API from "./adapters/API";
import Results from "./components/Results";
import Search from "./components/Search";

export default class App extends Component {
  state = {
    results: "",
    search: ""
  };
  componentDidMount() {
    if (this.state.search)
      API.getToken()
        .then(response => API.search(this.state.search, response.access_token))
        .then(response => {
          console.log(response);
          this.setState({
            results: this.extractReleventData(response.tracks.items)
          });
        });
  }

  setResults = results => {
    this.setState({
      results
    });
  };

  render() {
    return (
      <div className="App">
        <Search setResults={this.setResults} />
        <Results results={this.state.results} />
      </div>
    );
  }
}
