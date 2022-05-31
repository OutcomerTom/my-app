import { Link } from "react-router-dom";
import React from "react";
import { routesPaths } from "../routes";
import "./styles.css";

export const Navigation = () => {
  return (
    <div className="Navigation">
      <div>
        logo
        <span className="Navigation-mobile">X</span>
      </div>
      <div className="Navigation-links">
        <Link className="App-link" to={"/"}>
          Home
        </Link>
        <Link className="App-link" to={`/${routesPaths.about}`}>
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
