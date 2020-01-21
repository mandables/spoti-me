const TOKEN_URL = "https://accounts.spotify.com/api/token";
const BASE_URL = "https://api.spotify.com/v1/";
const USER_AUTH = "https://accounts.spotify.com/authorize"
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const AUTH_QUERY = "https://accounts.spotify.com/authorize?client_id=d31f37a814f743b8934138cb93e7ae57&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-private%20user-read-email"

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

  static search = (search, token) => {
    let query = BASE_URL + `search?q=${search}&type=track`;
    return fetch(query, {
      headers: { Authorization: "Bearer " + token }
    }).then(resp => resp.json());
  };

}