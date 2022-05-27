import { useState, useEffect, useCallback } from "react";

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
  }, [inputValue]);

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
  }, []);

  return (
    <div>
      {displayError && <div style={{ color: "red" }}>{errorMessage}</div>}
      <div>UserName:</div>
      <input onInput={handleInputChange} value={inputValue} type="text" />
      <br />
      <button onClick={handleSubmit} disabled={displayError || !inputValue}>
        submit data
      </button>
    </div>
  );
};
