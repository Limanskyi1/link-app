import React from "react";
import { Logo, IconLink, IconProfile } from "../../icons";
import { NavLink } from "react-router-dom";
// 
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <div className="header__logo">
            <Logo width="146px" height="32px" />
          </div>
          <div className="header__links">
            <NavLink to="/">
              <IconLink />
              <span>Links</span>
            </NavLink>
            <NavLink to="/profile">
              <IconProfile />
              <span>Profile Details</span>
            </NavLink>
          </div>
          <NavLink to="/preview" className="header__preview">
            Preview
          </NavLink>
        </div>
      </div>
    </header>
  );
};
