import React from "react";
import API from "../adapters/API";

function Search(props) {
  const searchAPI = e => {
    e.preventDefault();
    e.persist();
    API.getToken()
      .then(response =>
        API.search(e.target.search.value, response.access_token)
      )
      .then(response =>
        props.setResults(extractReleventData(response.tracks.items))
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
