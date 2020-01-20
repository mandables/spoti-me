import React from "react";
import ResultsRow from "./ResultsRow";

function Results(props) {
  let rows = () => {
    if (props.results) {
      return props.results.map(result => {
        return <ResultsRow info={result} />;
      });
    }
  };
  return (
    <div>
      <table>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Album</th>
        </tr>
        {rows()}
      </table>
    </div>
  );
}
export default Results;
