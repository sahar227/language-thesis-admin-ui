import api from "./api";

export default async function postWordPhase1(word, translation, imageURL) {
  const { data } = await api.post("/words/phase1", {
    word,
    translation,
    imageURL,
  });
  return data;
}
