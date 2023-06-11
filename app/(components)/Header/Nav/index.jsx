"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import AnimatedButton from "./AnimatedButton";
import styles from "./Nav.module.scss";

function Nav() {
  const [navActive, setNavActive] = useState(false);
  const pathname = usePathname();

  function toggleMenu() {
    setNavActive((prevState) => !prevState);
  }

  return (
    <nav className={classnames("container", styles.nav)}>
      <AnimatedButton toggleMenu={toggleMenu} navActive={navActive} />
      <div className={classnames(styles.navItems, navActive && styles.expanded)}>
        <Link
          href="/competition"
          className={(pathname === "/competition" && styles.active)}
          onClick={toggleMenu}
        >
          Today
        </Link>
        <Link
          href="/competitors"
          className={pathname.startsWith("/competitors") && styles.active}
          onClick={toggleMenu}
        >
          Competitors
        </Link>
        <Link
          href="/leaderboards"
          className={pathname === "/leaderboards" && styles.active}
          onClick={toggleMenu}
        >
          Leaderboards
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
