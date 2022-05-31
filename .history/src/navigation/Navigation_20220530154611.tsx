import { Link } from "react-router-dom";
import React from "react";
// import { routesPaths } from "./App";

const Navigation = () => {
  return (
    <div className="App-header">
      <div>logo</div>
      <div>
        <Link className="App-link" to={"/Home"}>
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
    </div>
  );
};
