import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import createSession from "../api/userSessions/createSession";
import getSessions from "../api/userSessions/getSessions";
import NewSessionForm from "./NewSessionForm";
import UserSessionTable from "./UserSessionTable";

export default function UserSessionsTab() {
  const [sessions, setSessions] = useState([]);

  const getSessionsToState = async () => {
    const sessions = await getSessions();
    setSessions(sessions);
  };

  const addSession = async (name, groupNumber) => {
    const session = await createSession(name, groupNumber);
    setSessions((current) => [...current, session]);
  };

  useEffect(() => {
    getSessionsToState();
  }, []);

  return (
    <div>
      <h1>User sessions</h1>
      <UserSessionTable sessions={sessions} />
      <div style={{ marginTop: "30px" }}>
        <NewSessionForm addSessions={addSession} />
      </div>
    </div>
  );
}
