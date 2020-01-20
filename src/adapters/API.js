const TOKEN_URL = "https://accounts.spotify.com/api/token";
const BASE_URL = "https://api.spotify.com/v1/";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export default class API {
  static getToken = () => { 
    let data = new URLSearchParams();
    data.append("client_id", CLIENT_ID);
    data.append("client_secret", CLIENT_SECRET);
    data.append("grant_type", "client_credentials");
    return fetch(TOKEN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data
    }).then(resp => resp.json());
  };

  static search = token => {
    return fetch(BASE_URL + "search?q=chill&type=playlist", {
      headers: { Authorization: "Bearer " + token }
    }).then(resp => resp.json());
  };
}
