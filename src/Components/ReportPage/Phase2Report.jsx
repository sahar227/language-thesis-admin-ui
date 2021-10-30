import React from "react";
import Phase2ReportBlock from "./Phase2ReportBlock";

export default function Phase2Report({ phase2Blocks }) {
  return (
    <div>
      <h1>Phase 2 Reports</h1>
      <div>
        {phase2Blocks.map((block, i) => (
          <Phase2ReportBlock
            questionReports={block.report}
            blockNumber={i + 1}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
