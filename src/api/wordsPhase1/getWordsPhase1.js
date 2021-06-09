import api from "../api";

export default async function getWordsPhase1() {
  const { data } = await api.get("/words/phase1");
  return data;
}
