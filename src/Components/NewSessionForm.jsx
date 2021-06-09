import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

export default function NewSessionForm({ addSessions }) {
  const [name, setName] = useState("");
  const [groupNumber, setGroupNumber] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const clearForm = () => {
    setName("");
    setGroupNumber(1);
  };
  const submit = async () => {
    setIsLoading(true);
    addSessions(name, groupNumber);
    clearForm();
    setIsLoading(false);
  };
  return (
    <form noValidate autoComplete="off">
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormControl>
          <InputLabel id="group-number">Group</InputLabel>
          <Select
            labelId="group-number"
            value={groupNumber}
            onChange={(e) => setGroupNumber(e.target.value)}
          >
            <MenuItem value={1}>Group One</MenuItem>
            <MenuItem value={2}>Group Two</MenuItem>
          </Select>
        </FormControl>
        {/* <TextField
          label="Group Number"
          value={groupNumber}

          onChange={(e) => setGroupNumber(e.target.value)}
        /> */}
        <Button
          disabled={isLoading}
          variant="contained"
          color="primary"
          onClick={submit}
        >
          Open Session
        </Button>
      </div>
    </form>
  );
}
