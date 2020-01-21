import React from "react";
import ResultsRow from "./ResultsRow";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function Results(props) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });

  let rows = () => {
    if (props.results) {
      return props.results.map((result, index) => {
        return <ResultsRow info={result} key={index} />;
      });
    }
  };

  const classes = useStyles();

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Song</TableCell>
              <TableCell align="left">Artist</TableCell>
              <TableCell align="left">Album</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rows()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Results;
