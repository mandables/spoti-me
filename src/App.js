import React, { Component } from "react";
import "./App.css";
import API from "./adapters/API";

console.log(process.env.REACT_APP_CLIENT_ID);

export default class App extends Component {
  componentDidMount() {
    API.getToken().then(console.log);
  }
  render() {
    return <div className="App"></div>;
  }
}
