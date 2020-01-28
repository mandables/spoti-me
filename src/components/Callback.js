import React, { useEffect } from "react";
import API from "../adapters/API";
import { Redirect } from "@reach/router";

function Callback(props) {
  let setToken = () => {
    let code = props.location.href.split("code=")[1];
    API.getUserToken(code).then(resp => {
      localStorage.refresh_token = resp.refresh_token;
    });
  };

  useEffect(() => setToken(), []);

  return <Redirect noThrow to="/playlists" />;
}

export default Callback;
