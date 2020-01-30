import React from "react";
import ResultsRow from "./ResultsRow";

function Results(props) {
  let rows = () => {
    if (props.results) {
      return props.results.map((result, index) => {
        return (
          <ResultsRow
            addSongToPlaylists={props.addSongToPlaylists}
            key={index}
            info={result}
          />
        );
      });
    }
  };
  return (
    <table className="search-table">
      <thead>
        <tr className="t-header">
          <th>SONG</th>
          <th>ARTIST</th>
          <th>ALBUM</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows()}</tbody>
    </table>
  );
}
export default Results;
