import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";
import logo from "../../images/tot-logo.svg";

function Nav(props) {
  const [active, setActive] = useState("");

  return (
    <div>
      <img className="tot-logo" src={logo} alt="" />
      <nav className="nav-bar">
        <div className="nav-list">
          <NavLink className={"nav-item" + active} to={"/"}>
            Today
          </NavLink>
          <NavLink className={"nav-item" + active} to={"/competitors"}>
            Competitors
          </NavLink>
          <NavLink className={"nav-item" + active} to={"/leaderboards"}>
            Leaderboards
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
