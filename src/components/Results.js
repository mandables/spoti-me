import React from "react";
import ResultsRow from "./ResultsRow";

function Results(props) {
  let rows = () => {
    if (props.results) {
      return props.results.map((result, index) => {
        return <ResultsRow key={index} info={result} />;
      });
    }
  };
  return (
    <table className="table">
      <thead>
        <tr className="t-header">
          <th>Song</th>
          <th>Artist</th>
          <th>Album</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows()}</tbody>
    </table>
  );
}
export default Results;
