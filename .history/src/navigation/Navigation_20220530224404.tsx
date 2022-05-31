import { Link } from "react-router-dom";
import React from "react";
import { routesPaths } from "../routes";
import "./styles.css";

export const Navigation = () => {
  const [navigationVisible, setNavigationVisible] = useState<boolean>(true);
  const handleShowMobileNav = () => {
    setNavigationVisible(!navigationVisible);
  };

  return (
    <div className="Navigation">
      <div>
        logo
        <span onClick={handleShowMobileNav} className="Navigation-mobile">
          X
        </span>
      </div>
      {navigationVisible && (
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
      )}
    </div>
  );
};
