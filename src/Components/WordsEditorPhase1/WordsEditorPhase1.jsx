import React, { useEffect, useState } from "react";
import getWordsPhase1 from "../../api/getWordsPhase1";
import postWordPhase1 from "../../api/postWordPhase1";
import removeWordPhase1 from "../../api/removeWordPhase1";
import NewWordForm from "../NewWordForm/NewWordForm";
import WordTable from "../WordTable/WordTable";

export default function WordsEditorPhase1() {
  const [words, setWords] = useState([]);

  const getWords = async () => {
    const words = await getWordsPhase1();
    console.log(words);
    setWords(words);
  };

  const addWord = async (word, translation, imageURL) => {
    const wordToAdd = { word, translation, imageURL };
    const wordItem = await postWordPhase1(wordToAdd);
    setWords((current) => [...current, wordItem]);
  };

  const removeWord = async (id) => {
    await removeWordPhase1(id);
    setWords((current) => current.filter((wordItem) => wordItem._id !== id));
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <div>
      <h1>Words Phase 1</h1>
      <WordTable wordItems={words} removeWord={removeWord} />
      <div style={{ marginTop: "30px" }}>
        <NewWordForm addWord={addWord} />
      </div>
    </div>
  );
}
