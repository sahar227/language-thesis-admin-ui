import React, { useState } from "react";
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

function ReportTable({ questionReports }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Word</StyledTableCell>
            <StyledTableCell>Translation</StyledTableCell>
            <StyledTableCell>Correct Answer</StyledTableCell>
            <StyledTableCell>User Answer</StyledTableCell>
            <StyledTableCell>Seconds To Answer</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questionReports.map((report) => (
            <StyledTableRow key={report._id}>
              <StyledTableCell>{report.word}</StyledTableCell>
              <StyledTableCell>{report.translation}</StyledTableCell>
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
  );
}

export default function Phase2ReportBlock({
  questionReports,
  blockNumber,
  wordsPhase1,
}) {
  const [showFullReport, setShowFullReport] = useState(false);

  const knownWordsQuestions = questionReports.filter((v) =>
    wordsPhase1.has(v.word)
  );
  const knownWordsCorrectAnswers = knownWordsQuestions.filter(
    (v) => v.userAnswer === v.answer
  ).length;
  const newWordsQuestions = questionReports.filter(
    (v) => !wordsPhase1.has(v.word)
  );
  const newWordsCorrectAnswers = newWordsQuestions.filter(
    (v) => v.userAnswer === v.answer
  ).length;

  return (
    <div>
      <h2>Block {blockNumber}:</h2>
      <div>
        {knownWordsQuestions.length > 0 &&
          `Total Correct answers on phase1 words: ${knownWordsCorrectAnswers}/${
            knownWordsQuestions.length
          } (${
            (knownWordsCorrectAnswers / knownWordsQuestions.length) * 100
          }%)`}
      </div>
      <div>
        {newWordsQuestions.length > 0 &&
          `Total Correct answers on phase2 words: ${newWordsCorrectAnswers}/${
            newWordsQuestions.length
          } (${(newWordsCorrectAnswers / newWordsQuestions.length) * 100}%)`}
      </div>
      <div>
        {newWordsQuestions.length > 0 &&
          `Total Correct answers on ALL words: ${
            newWordsCorrectAnswers + knownWordsCorrectAnswers
          }/${questionReports.length} (${
            ((newWordsCorrectAnswers + knownWordsCorrectAnswers) /
              questionReports.length) *
            100
          }%)`}
      </div>
      <button onClick={() => setShowFullReport((prev) => !prev)}>
        {showFullReport ? "hide" : "show"} questions
      </button>
      {showFullReport && <ReportTable questionReports={questionReports} />}
    </div>
  );
}
