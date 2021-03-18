import React from "react";
import { HashRouter } from "react-router-dom";
import NavList from './NavList';
import Routes from './Routes';

function Navbar() {
  return (
    <HashRouter>
      <div className="Content-Wrapper">
      <NavList></NavList>
      <Routes></Routes>
      </div>
    </HashRouter>
  );
}

export default Navbar;
