import React, { useEffect } from "react";
import API from "../adapters/API";

function Callback(props) {
  useEffect(() => setToken(), []);

  let setToken = () => {
    let code = props.location.href.split("code=")[1];
    API.getUserToken(code)
      .then(resp => {
        localStorage.setItem("a_token", resp.access_token);
        localStorage.setItem("r_token", resp.refresh_token);
      })
      .then(grabUserInfo);
  };

  const grabUserInfo = () => {
    let url = "https://api.spotify.com/v1/me";
    API.fetchInfo(url, localStorage.getItem("a_token"));
  };
  return null;
}

export default Callback;
