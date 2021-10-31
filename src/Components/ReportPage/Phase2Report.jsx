import React from "react";
import Phase2ReportBlock from "./Phase2ReportBlock";

export default function Phase2Report({ phase2Blocks, wordsPhase1 }) {
  const questions = phase2Blocks.flatMap((v) => v.report);
  const knownWordsQuestions = questions.filter((v) => wordsPhase1.has(v.word));
  const knownWordsCorrectAnswers = knownWordsQuestions.filter(
    (v) => v.userAnswer === v.answer
  ).length;
  const newWordsQuestions = questions.filter((v) => !wordsPhase1.has(v.word));
  const newWordsCorrectAnswers = newWordsQuestions.filter(
    (v) => v.userAnswer === v.answer
  ).length;

  return (
    <div>
      <h1>Phase 2 Reports</h1>
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
          }/${questions.length} (${
            ((newWordsCorrectAnswers + knownWordsCorrectAnswers) /
              questions.length) *
            100
          }%)`}
      </div>
      <div>
        {phase2Blocks.map((block, i) => (
          <Phase2ReportBlock
            questionReports={block.report}
            blockNumber={i + 1}
            wordsPhase1={wordsPhase1}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
