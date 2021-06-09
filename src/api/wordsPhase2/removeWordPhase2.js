import api from "../api";

export default async function removeWordPhase2(id) {
  const word = await api.delete("/words/phase2/" + id);
  return word;
}
