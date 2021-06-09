import React, { useEffect, useState } from "react";
import getWordsPhase1 from "../../api/wordsPhase1/getWordsPhase1";
import postWordPhase1 from "../../api/wordsPhase1/postWordPhase1";
import removeWordPhase1 from "../../api/wordsPhase1/removeWordPhase1";
import NewWordForm from "../NewWordForm/NewWordForm1";
import WordTable from "../WordTable/WordTable1";

export default function WordsEditorPhase1() {
  const [words, setWords] = useState([]);

  const getWords = async () => {
    const words = await getWordsPhase1();
    setWords(words);
  };

  const addWord = async (word, translation, imageURL) => {
    const wordItem = await postWordPhase1(word, translation, imageURL);
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
