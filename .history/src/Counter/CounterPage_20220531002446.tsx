import React, { useState, useEffect } from "react";

export const CounterPage = () => {
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
      <button onClick={() => handleShowAlert(22)}>Show Alert</button>
      <hr />
    </>
  );
};
