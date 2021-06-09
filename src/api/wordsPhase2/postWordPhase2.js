import api from "../api";

export default async function postWordPhase2(word, translation) {
  const { data } = await api.post("/words/phase2", {
    word,
    translation,
  });
  return data;
}
