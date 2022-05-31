import React from "react";

export const CounterPage = () => {
  return (
    <>
      <div>CounterPage</div>;
      <hr />
      <div>{`Alert was shown: ${counter} times`}</div>
      <button onClick={() => handleShowAlert(22)}>Show Alert</button>
      <hr />
    </>
  );
};
