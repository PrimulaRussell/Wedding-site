import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./styles/App.css";
import Registry from "./components/Registry.js";
import Photos from "./components/photos";
import Updates from "./components/update";
import Zoom from "./components/zoom";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <HashRouter>
      {/*Navbar*/}

      <div className="flex">
        {/* Header */}

        <NavLink to="/" className="navTitle">
          Marge & Randy
        </NavLink>

        {/* Navigation Items */}

        <ul className="navBar">
          <li>
            <NavLink to="/registry" className="nav">
              Registry
            </NavLink>
          </li>
          <li>
            <NavLink to="/photos" className="nav">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/updates" className="nav">
              Updates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/https://www.facebook.com/We-Choose-This-Life-The-Randell-Jones-Marjorie-Senechal-Wedding-Page-107092668105344"
              className="nav"
            >
              Facebook Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/zoom" className="nav">
              Zoom
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="nav signUp">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Content Container */}
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        <Route exact path="/registry" component={Registry} />
        <Route exact path="/photos" component={Photos} />
        <Route exact path="/updates" component={Updates} />
        <Route exact path="/zoom" component={Zoom} />
      </div>
      <Footer></Footer>
    </HashRouter>
  );
};

export default App;
