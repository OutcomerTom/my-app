import { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import "./InputForm.css";

interface InputFormProps {
  defaultValue: string;
}

const storageFormKey = "inputValue";

export const InputForm = (props?: InputFormProps) => {
  const [displayError, setDisplayError] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const formReadyToSubmit = !(displayError || !inputValue);

  const handleInputChange = (event: any) => {
    const messageLength = event.target.value.length;
    setInputValue(event.target.value);
    if (messageLength < 3 || messageLength > 20) {
      if (messageLength < 3) {
        setErrorMessage("UserName is too short");
      }

      if (messageLength > 20) {
        setErrorMessage("UserName is too long");
      }

      setDisplayError(true);
    } else {
      setDisplayError(false);
      setErrorMessage("");
    }
  };

  const handleSubmit = useCallback(() => {
    if (formReadyToSubmit) {
      localStorage.setItem(storageFormKey, inputValue);
    }
  }, [formReadyToSubmit, inputValue]);

  useEffect(() => {
    let valueToSet = "";
    const localStorageData = localStorage.getItem(storageFormKey);
    if (!!localStorageData) {
      valueToSet = localStorageData;
    } else {
      if (!!props?.defaultValue) {
        valueToSet = props?.defaultValue;
      }
    }

    setInputValue(valueToSet);
  }, [props?.defaultValue]);

  return (
    <div>
      {displayError && <div style={{ color: "red" }}>{errorMessage}</div>}
      <br />
      <div>UserName:</div>
      {/* <input onInput={handleInputChange} value={inputValue} type="text" /> */}
      <br />
      <Box
        // className="container"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "15ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Write Your name"
          color="secondary"
          defaultValue="Normal"
          id="margin-none"
          focused
          onInput={handleInputChange}
          value={inputValue}
          type="text"
        />
        <br />
        <Button
          variant="outlined"
          defaultValue="Small"
          id="margin-none"
          onClick={handleSubmit}
          disabled={displayError || !inputValue}
        >
          submit data
        </Button>
      </Box>
    </div>
  );
};
