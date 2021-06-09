import api from "../api";

export default async function removeWordPhase1(id) {
  const word = await api.delete("/words/phase1/" + id);
  return word;
}
