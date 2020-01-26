import React, { Component } from "react";
import "./App.scss";
import { Router } from "@reach/router";
import Playlists from "./pages/Playlists";
import Callback from "./components/Callback";
import Login from "./pages/Login";

export default class App extends Component {

  state = {
    userPlaylists: []
  }

  setUserPlaylists = playlists => {
    this.setState({
      userPlaylists: playlists
    })
  }
  render() {
    return (
      <>
        <Router>
          <Login path="/login" />
          <Callback path="/callback" setUserPlaylists={this.setUserPlaylists}/>
          <Playlists path="/playlists" playlists={this.state.userPlaylists}/>
        </Router>
      </>
    );
  }
}
