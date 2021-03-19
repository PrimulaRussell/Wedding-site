import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./styles/App.css";
import Registry from "./components/Registry.js";
import Photos from "./components/photos";
import Updates from "./components/update";
import Zoom from "./components/zoom";
import Home from './components/Home'


const App = () => {
  return (
    <HashRouter>

      {/* Header */}
      <div>
        <NavLink to="/" className="NavTitle">
          Marge & Randy
        </NavLink>
        <div className="Underline"></div>
        <p className="Info">August 13th, 2022</p>
        <p className="Info">
          8585 El Dorado Rd.
          <br />
          Atascadero, CA 93422
        </p>

        {/* Registration Buttons */}
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
      </div>

      {/* Content Section Background */}
      <div className="Wrapper">

          {/* Navigation Items */}
        <ul className="navUl">
          <li>
            <NavLink to="/registry" className="Nav">
              Registry
            </NavLink>
          </li>
          <li>
            <NavLink to="/photos" className="Nav">
              Photos
            </NavLink>
          </li>
          <li>
            <NavLink to="/updates" className="Nav">
              Updates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/https://www.facebook.com/We-Choose-This-Life-The-Randell-Jones-Marjorie-Senechal-Wedding-Page-107092668105344"
              className="Nav"
            >
              Facebook Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/zoom" className="Nav">
              Zoom
            </NavLink>
          </li>
        </ul>

          {/* Content Container */}
        <div className="Content">
          <Route exact path="/" component={Home} />
          <Route exact path="/registry" component={Registry} />
          <Route exact path="/photos" component={Photos} />
          <Route exact path="/updates" component={Updates} />
          <Route exact path="/zoom" component={Zoom} />
        </div>
        </div>
    </HashRouter>
  );
};

export default App;
