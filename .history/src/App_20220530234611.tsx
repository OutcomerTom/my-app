import React from "react";
import { Routes, Route } from "react-router-dom";
import { InputForm } from "./InputForm";
import { CounterPage } from "./Counter";
import { Navigation } from "./Navigation";
import { routesPaths } from "./routes";
import Button from "@mui/material/Button";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />

      <div>
        <hr />
        <Button
          variant="contained"
          onClick={() =>
            window.open("https://github.com/OutcomerTom/my-app/", "_blank")
          }
        >
          Go to repo
        </Button>

        <hr />
        <InputForm defaultValue={"Hello form"} />
      </div>
      <Routes>
        <Route path={"/"} element={<div>Home</div>} />
        <Route path={"*"} element={<div>404</div>} />
        <Route path={`/${routesPaths.about}`} element={<div>About</div>} />
        <Route path={"/CounterPage"} element={<CounterPage />} />
        <Route path={"/form"} element={<div>form</div>} />
      </Routes>
    </div>
  );
}

export default App;
