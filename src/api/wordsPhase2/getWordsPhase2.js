import api from "../api";

export default async function getWordsPhase2() {
  const { data } = await api.get("/words/phase2");
  return data;
}
