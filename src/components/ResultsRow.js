import React from "react";

function ResultsRow(props) {
  const { name, artist, album, uri } = props.info;
  return (
    <tr>
      <td>{name}</td>
      <td>{artist}</td>
      <td>{album}</td>
      <td>
        <button
          onClick={() => props.addSongToPlaylists(uri)}
          value="Add to Playlists"
        >
          Add to Playlists
        </button>
      </td>
    </tr>
  );
}
export default ResultsRow;
