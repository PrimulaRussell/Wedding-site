import React from 'react';
import { NavLink } from "react-router-dom";

const NavList = () => {
    return (
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
            <NavLink to="/story" className="Nav">
              Our Story
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
    )
}

export default NavList
