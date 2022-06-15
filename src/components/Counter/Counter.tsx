import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleShowAlert = (value: number): void => {
    alert("Helllo react");
    setCounter(counter + 1);
  };
  useEffect(() => {
    setCounter(0);
  }, []);

  return (
    <Box>
      <div>CounterPage</div>
      <Box m="10px" />
      <div>{`Alert was shown: ${counter} times`}</div>
      <Box m="10px" />
      <Button onClick={() => handleShowAlert(0)} variant="outlined">
        Show Alert
      </Button>
    </Box>
  );
};
