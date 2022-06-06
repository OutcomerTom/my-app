import React from "react";
import { Routes, Route } from "react-router-dom";
import { FormPage } from "./components/pages/FormPage";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { RickPage } from "./components/pages/RickPage";
import { CounterPage } from "./components/pages/CounterPage";
// import { routesPaths } from "./routes";
import ResponsiveAppBar from "./components/AppBar/AppBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path={"/Home"} element={<HomePage />} />
        <Route path={"/About"} element={<AboutPage />} />
        {/* <Route path={`/${routesPaths.about}`} element={<AboutPage />} /> */}
        <Route path={"/form"} element={<FormPage />} />
        <Route path={"/CounterPage"} element={<CounterPage />} />
        <Route path={"/Rick"} element={<RickPage />} />
        <Route path={"*"} element={<div>404</div>} />
      </Routes>
    </div>
  );
}

export default App;
