import React from "react";

function ResultsRow(props) {
  const { name, artist, album } = props.info;
  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{artist}</td>
        <td>{album}</td>
      </tr>
    </div>
  );
}
export default ResultsRow;
