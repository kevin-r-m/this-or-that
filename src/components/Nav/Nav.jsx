import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./nav.module.scss";
import logo from "../../images/tot-logo.svg";

function Nav(props) {
  const [active, setActive] = useState("");

  const cx = classNames.bind(styles);

  const navItemClass = cx({
    navItem: true,
    active: active,
  });

  return (
    <div>
      <img className={styles.logo} src={logo} alt="" />
      <nav className={styles.nav}>
        <div className={styles.navList}>
          <NavLink className={navItemClass} to={"/"}>
            Today
          </NavLink>
          <NavLink className={navItemClass} to={"/competitors"}>
            Competitors
          </NavLink>
          <NavLink className={navItemClass} to={"/leaderboards"}>
            Leaderboards
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
