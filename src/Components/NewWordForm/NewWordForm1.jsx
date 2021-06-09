import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function NewWordForm({ addWord }) {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const clearForm = () => {
    setWord("");
    setTranslation("");
    setImageURL("");
  };
  const submit = async () => {
    setIsLoading(true);
    addWord(word, translation, imageURL);
    clearForm();
    setIsLoading(false);
  };
  return (
    <form noValidate autoComplete="off">
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <TextField
          label="Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <TextField
          label="Translation"
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
        />
        <TextField
          label="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <Button
          disabled={isLoading}
          variant="contained"
          color="primary"
          onClick={submit}
        >
          Add Word
        </Button>
      </div>
    </form>
  );
}
