import API from "../adapters/API";

import React from "react";

function Search(props) {
  const searchAPI = async e => {
    e.preventDefault();
    e.persist();
    await API.refreshToken();

    const {
      tracks: { items }
    } = await API.search(e.target.search.value);

    props.setResults(extractReleventData(items));
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
    <form onSubmit={searchAPI} className="search">
      <input name="search" placeholder="Song Title" />
      <input type="submit" value="Search" />
    </form>
  );
}

export default Search;
