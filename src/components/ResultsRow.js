import React from "react";
import { truncate } from "../utils/helpers";

function ResultsRow(props) {
  const { name, artist, album, uri } = props.info;
  return (
    <tr>
      <td>{truncate(name)}</td>
      <td>{truncate(artist)}</td>
      <td>{truncate(album)}</td>
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
