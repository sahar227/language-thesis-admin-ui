import React, { useCallback, useEffect, useState } from "react";
import getReports from "../../api/reports/getReports";
import Phase1Report from "./Phase1Report";
import Phase2Report from "./Phase2Report";

export default function ReportPage({ sessionID }) {
  const [reports, setReports] = useState(null);

  const getReportsToState = useCallback(async () => {
    const response = await getReports(sessionID);
    setReports(response);
  }, [sessionID]);

  useEffect(() => {
    getReportsToState();
  }, [getReportsToState]);

  const phase1 = reports?.phase1?.report;
  const phase2Blocks = reports?.phase2Blocks;
  return (
    <div>
      {sessionID}
      {phase1 && <Phase1Report questionReports={phase1} />}
      {phase2Blocks && <Phase2Report phase2Blocks={phase2Blocks} />}
    </div>
  );
}
