import React from "react";

function Login() {
  const AUTH_QUERY =
    "https://accounts.spotify.com/authorize?client_id=d31f37a814f743b8934138cb93e7ae57&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-private%20user-read-email%20playlist-modify-private%20playlist-modify-public";

  const spotifyLogin = () => {
    window.location.assign(AUTH_QUERY);
  };
  return <button onClick={spotifyLogin}>Login</button>;
}

export default Login;
