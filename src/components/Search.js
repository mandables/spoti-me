import API from "../adapters/API";

import React from "react";

function Search(props) {
  const searchAPI = e => {
    e.preventDefault();
    e.persist();
    API.refreshToken().then(resp =>
      API.search(e.target.search.value, resp.access_token).then(resp =>
        props.setResults(extractReleventData(resp.tracks.items))
      )
    );
  };

  const extractReleventData = response => {
    let results = [];
    response.map(item => {
      let result = Object.assign(
        {},
        { name: item.name },
        { artist: item.artists[0].name },
        { album: item.album.name },
        { uri: item.uri },
        { popularity: item.popularity }
      );
      return results.push(result);
    });
    return results;
  };

  return (
    <form onSubmit={searchAPI}>
      <input name="search" placeholder="Song Title" />
      <input type="submit" value="Search" />
    </form>
  );
}

export default Search;
