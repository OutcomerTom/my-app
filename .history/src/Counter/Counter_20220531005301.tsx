import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleShowAlert = (value: number): void => {
    alert("Helllo react");
    setCounter(counter + 1);
  };
  useEffect(() => {
    setCounter(22);
  }, []);

  return (
    <>
      <div>CounterPage</div>
      <hr />
      <div>{`Alert was shown: ${counter} times`}</div>
      <hr />
      <Button onClick={() => handleShowAlert(22)} variant="outlined">
        Show Alert
      </Button>
    </>
  );
};
