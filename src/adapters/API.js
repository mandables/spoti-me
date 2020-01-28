const TOKEN_URL = "https://accounts.spotify.com/api/token";
const BASE_URL = "https://api.spotify.com/v1/";
// const USER_AUTH = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const PLAYLIST_URL = "https://api.spotify.com/v1/playlists/";
// const AUTH_QUERY =
// 	'https://accounts.spotify.com/authorize?client_id=d31f37a814f743b8934138cb93e7ae57&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-private%20user-read-email';

const request = (url, options = {}) =>
  fetch(url, options).then(resp => resp.json());

const get = (url, options) => request(url, options);

const post = (url, body) =>
  request(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  });

const authorizedPost = (url, data) =>
  request(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.access_token,
      Accept: "application/json"
    },
    body: JSON.stringify(data)
  });

const fetchInfo = url => {
  return get(url, {
    headers: { Authorization: "Bearer " + localStorage.access_token }
  });
};

const search = search => {
  let query = BASE_URL + `search?q=${search}&type=track`;
  return fetchInfo(query, localStorage.access_token);
};

const getUserToken = url => {
  let data = new URLSearchParams();
  data.append("code", url);
  data.append("redirect_uri", "http://localhost:3000/callback");
  data.append("client_id", CLIENT_ID);
  data.append("client_secret", CLIENT_SECRET);
  data.append("grant_type", "authorization_code");
  return post(TOKEN_URL, data);
};

const refreshToken = async () => {
  let data = new URLSearchParams();
  data.append("refresh_token", localStorage.refresh_token);
  data.append("client_id", CLIENT_ID);
  data.append("client_secret", CLIENT_SECRET);
  data.append("grant_type", "refresh_token");
  const { access_token } = await post(TOKEN_URL, data);

  localStorage.access_token = access_token;
};

const addSong = async (playlistId, songUri) => {
  let url = PLAYLIST_URL + playlistId + "/tracks";

  await refreshToken();

  authorizedPost(url, { uris: [songUri] });
};

export default { search, getUserToken, addSong, refreshToken, fetchInfo };
