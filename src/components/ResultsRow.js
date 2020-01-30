import React from "react";

function ResultsRow(props) {
  const { name, artist, album, uri } = props.info;
  return (
    <tr>
      <td>{name}</td>
      <td>{artist}</td>
      <td>{album}</td>
      <td>
        <div className="add"
          onClick={() => props.addSongToPlaylists(uri)}
         
        >
          Add
        </div>
      </td>
    </tr>
  );
}
export default ResultsRow;
