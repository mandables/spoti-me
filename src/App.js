import React, { Component } from "react";
import "./App.scss";
import { Router } from "@reach/router";
import Playlists from "./pages/Playlists";
import Callback from "./components/Callback";
import Login from "./pages/Login";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Login path="/login" />
          <Callback path="/callback" />
          <Playlists path="/playlists" />
        </Router>
      </>
    );
  }
}
