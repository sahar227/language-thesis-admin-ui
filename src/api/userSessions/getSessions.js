import api from "../api";

export default async function getSessions() {
  const { data } = await api.get("/user-session");
  return data;
}
