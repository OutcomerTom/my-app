import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { InputForm } from "./InputForm";
import { CounterPage } from "./Counter";
import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const handleShowAlert = (value: number): void => {
    alert("Helllo react");
    setCounter(counter + 1);
  };
  useEffect(() => {
    setCounter(22);
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div>logo</div>
        <div>
          <Link className="App-link" to={"/"}>
            Home
          </Link>
          <Link className="App-link" to={"/about"}>
            About
          </Link>
          <Link className="App-link" to={"/form"}>
            Form
          </Link>
          <Link className="App-link" to={"/CounterPage"}>
            CounterPage
          </Link>
        </div>
        <div>{`Alert was shown: ${counter} times`}</div>
        <button onClick={() => handleShowAlert(22)}>Show Alert</button>
        <hr />
        <td
          onClick={() =>
            window.open("https://github.com/OutcomerTom/my-app/", "_blank")
          }
        >
          Go to repo
        </td>
        <hr />
        <InputForm defaultValue={"Hello form"} />
      </div>
      <Routes>
        <Route path={"/"} element={<div>Home</div>} />
        <Route path={"*"} element={<div>404</div>} />
        <Route path={"/about"} element={<div>About</div>} />
        <Route path={"/CounterPage"} element={<CounterPage />} />
        <Route path={"/form"} element={<div>form</div>} />
      </Routes>
    </div>
  );
}

export default App;
