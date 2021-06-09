import React, { useEffect, useState } from "react";
import getWordsPhase2 from "../../api/wordsPhase2/getWordsPhase2";
import postWordPhase2 from "../../api/wordsPhase2/postWordPhase2";
import removeWordPhase2 from "../../api/wordsPhase2/removeWordPhase2";
import NewWordForm from "../NewWordForm/NewWordForm2";
import WordTable from "../WordTable/WordTable2";

export default function WordsEditorPhase2() {
  const [words, setWords] = useState([]);

  const getWords = async () => {
    const words = await getWordsPhase2();
    console.log(words);
    setWords(words);
  };

  const addWord = async (word, translation) => {
    const wordItem = await postWordPhase2(word, translation);
    setWords((current) => [...current, wordItem]);
  };

  const removeWord = async (id) => {
    await removeWordPhase2(id);
    setWords((current) => current.filter((wordItem) => wordItem._id !== id));
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <div>
      <h1>Words Phase 2</h1>
      <WordTable wordItems={words} removeWord={removeWord} />
      <div style={{ marginTop: "30px" }}>
        <NewWordForm addWord={addWord} />
      </div>
    </div>
  );
}
