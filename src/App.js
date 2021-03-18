import React from "react";
import { NavLink, HashRouter } from "react-router-dom";
import "./styles/App.css";
import Content from "./components/Content";

const App = () => {
  return (
    <HashRouter>
      <div>
        <NavLink to="/" className="NavTitle">
          Marge & Randy
        </NavLink>
        <div className="Underline"></div>
        <p className="Info">August 13nd, 2022</p>
        <p className="Info">
          8585 El Dorado Rd.
          <br />
          Atascadero, CA 93422
        </p>
        <ul className="flexReg">
          <li>
            <NavLink to="/registry" className="NavReg">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/registry" className="NavLog">
              Log In
            </NavLink>
          </li>
        </ul>
        <Content></Content>
      </div>
    </HashRouter>
  );
};

export default App;
