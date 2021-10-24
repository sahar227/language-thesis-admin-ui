import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function Phase1Report({ questionReports }) {
  return (
    <div>
      <h1>Phase 1 Report</h1>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Word</StyledTableCell>
              <StyledTableCell>Letter</StyledTableCell>
              <StyledTableCell>Correct Answer</StyledTableCell>
              <StyledTableCell>User Answer</StyledTableCell>
              <StyledTableCell>Seconds To Answer</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questionReports.map((report) => (
              <StyledTableRow key={report._id}>
                <StyledTableCell>{report.word}</StyledTableCell>
                <StyledTableCell>{report.letter}</StyledTableCell>
                <StyledTableCell>{report.answer.toString()}</StyledTableCell>
                <StyledTableCell>
                  {report.userAnswer !== undefined
                    ? report.userAnswer.toString()
                    : "Timed out"}
                </StyledTableCell>
                <StyledTableCell>{report.secondsToAnswer}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
