import React, { Component } from "react";
import "./App.scss";
import API from "./adapters/API";
import Results from "./components/Results";
import Search from "./components/Search";
import { Router } from "@reach/router";
import Playlists from "./pages/Playlists";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Playlists path="/playlists" />
        </Router>
      </>
    );
  }
}
