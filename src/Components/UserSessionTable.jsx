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

export default function UserSessionTable({ sessions }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Group Number</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Id</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessions.map((session) => (
            <StyledTableRow key={session._id}>
              <StyledTableCell>{session.name}</StyledTableCell>
              <StyledTableCell>{session.groupNumber}</StyledTableCell>
              <StyledTableCell>
                {session.isOpen ? "Open" : "Closed"}
              </StyledTableCell>
              <StyledTableCell>{session._id}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
