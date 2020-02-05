import API from "../adapters/API";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const searchIcon = <FontAwesomeIcon icon={faSearch} id="search-icon" />;

function Search(props) {
  const searchAPI = e => {
    e.preventDefault();
    e.persist();
    API.refreshToken().then(resp =>
      API.search(e.target.search.value, resp.access_token).then(resp =>
        props.setResults(extractRelevantData(resp.tracks.items))
      )
    );
  };

  const extractRelevantData = response => {
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
    <div className="input-wrapper">
      <input
        id="search-bar"
        name="search"
        placeholder="Search"
      ></input>
      {searchIcon}
    </div>
  );
}

export default Search;

/*     
  // /* // <form onSubmit={searchAPI} className="search">
    
  // //   <input id="search-bar" name="search" placeholder="Song Title" ></input> 
  // //   <input type="submit" value="Search" />
  // // </form> */
