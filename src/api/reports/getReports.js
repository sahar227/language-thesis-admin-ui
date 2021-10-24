import api from "../api";

export default async function getReports(sessionID) {
  const { data } = await api.get("/reports/" + sessionID);
  return data;
}
