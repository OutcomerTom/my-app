import React from "react";
import { Routes, Route } from "react-router-dom";
import { FormPage } from "./FormPage";
import { HomePage } from "./HomePage";
import { CounterPage } from "./CounterPage";
import { routesPaths } from "./routes";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path={"/Home"} element={<HomePage />} />
        <Route path={`/${routesPaths.about}`} element={<div>About</div>} />
        <Route path={"/CounterPage"} element={<CounterPage />} />
        <Route path={"/form"} element={<FormPage />} />
        <Route path={"*"} element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
