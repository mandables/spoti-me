import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Results from "../components/Results";
import PlaylistTable from "../components/PlaylistTable";
import API from "../adapters/API";
import "../stylesheets/playlists.scss";

// const greet = e => {}

// document.body.addEventListener('click', greet)

const Playlists = () => {
  // state = {
  //   results: "",
  //   playlists: [],
  //   selectedPlaylists: []
  // };

  const [results, setResults] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);

  // const selectedPlaylists = useSelector(
  //   state => state.selectedPlaylists
  // );

  const refreshTokenAndGetPlaylists = async () => {
    await API.refreshToken();
    grabUserInfo();
  };

  useEffect(() => {
    refreshTokenAndGetPlaylists();
  }, []);

  const addSongToPlaylists = uri => {
    if (selectedPlaylists.length !== 0) {
      let promises = selectedPlaylists.map(playlist => {
        debugger;
        return API.addSong(playlist, uri);
      });
      Promise.all(promises).then(() => alert("Done"));
    } else {
      alert("No playlists selected");
    }
  };

  const addPlaylistToState = id => {
    selectedPlaylists.includes(id)
      ? setSelectedPlaylists(
          selectedPlaylists.filter(playlist => playlist !== id)
        )
      : setSelectedPlaylists([...selectedPlaylists, id]);
  };

  const grabUserInfo = () => {
    let url = "https://api.spotify.com/v1/me/playlists";
    API.fetchInfo(url).then(playlists => {
      setPlaylists(playlists.items);
    });
  };

  return (
    <div className="playlists-container">
      <Search setResults={setResults} />
      {results ? (
        <Results addSongToPlaylists={addSongToPlaylists} results={results} />
      ) : (
        <div className="placeholder"></div>
      )}
      <PlaylistTable
        selectPlaylist={addPlaylistToState}
        playlists={playlists}
      />
    </div>
  );
};

export default Playlists;
