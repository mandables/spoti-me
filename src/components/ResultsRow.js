import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function ResultsRow(props) {
  const { name, artist, album } = props.info;
  return (
    <TableRow key={name}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="left">{artist}</TableCell>
      <TableCell align="left">{album}</TableCell>
    </TableRow>
  );
}
export default ResultsRow;
