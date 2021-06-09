import api from "../api";

export default async function createSession(name, groupNumber) {
  const { data } = await api.post("/user-session", {
    name,
    groupNumber,
  });
  return data;
}
