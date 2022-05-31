import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Counter } from "./Counter";

export const CounterPage = () => {
  return <Counter />;
};

// export const CounterPage = () => {
//   const [counter, setCounter] = useState<number>(0);

//   const handleShowAlert = (value: number): void => {
//     alert("Helllo react");
//     setCounter(counter + 1);
//   };
//   useEffect(() => {
//     setCounter(22);
//   }, []);

//   return (
//     <>
//       <div>CounterPage</div>
//       <hr />
//       <div>{`Alert was shown: ${counter} times`}</div>
//       <hr />
//       <Button onClick={() => handleShowAlert(22)} variant="outlined">
//         Show Alert
//       </Button>
//     </>
//   );
// };
