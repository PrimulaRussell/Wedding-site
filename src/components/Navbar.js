import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import '../styles/Navbar.css'
import Home from "./Home";
import Registry from "./Registry.js";
import Photos from "./photos";
import Updates from "./update";
import Zoom from "./zoom";

function Navbar() {
  return (
    <HashRouter className="MainNavDiv">
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
          <div className="Content">
            <Route exact path="/" component={Home} />
            <Route exact path="/registry" component={Registry} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/updates" component={Updates} />
            <Route exact path="/zoom" component={Zoom} />
          </div>
        </ul>
        
    </HashRouter>
  );
}

export default Navbar;
