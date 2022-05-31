import React from "react";
import { Routes, Route } from "react-router-dom";
import { FormPage } from "./FormPage";
import { HomePage } from "./HomePage";
import { CounterPage } from "./CounterPage";
import { Navigation } from "./Navigation";
import { routesPaths } from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"*"} element={<div>404</div>} />
        <Route path={`/${routesPaths.about}`} element={<div>About</div>} />
        <Route path={"/CounterPage"} element={<CounterPage />} />
        <Route path={"/form"} element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
