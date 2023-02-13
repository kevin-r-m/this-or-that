"use client";

import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.scss";
import AnimatedButton from "./AnimatedButton";

function Nav() {
  const pathname = usePathname();
  const elementRef = useRef();

  function toggleMenu() {
    const elementClasses = elementRef.current.classList;
    elementClasses.toggle(styles.expanded);
    if (elementClasses.contains(styles.expanded)) {
      document.querySelector("body").style.overflow = "hidden";
      return;
    }
    document.querySelector("body").style.overflow = "auto";
  }

  return (
    <nav className={"container " + styles.nav}>
      <AnimatedButton callback={toggleMenu} />
      <div ref={elementRef} className={styles.navItems}>
        <Link
          href="/competition"
          className={pathname === "/competition" ? styles.active : ""}
        >
          Today
        </Link>
        <Link
          href="/competitors"
          className={pathname === "/competitors" ? styles.active : ""}
        >
          Competitors
        </Link>
        <Link
          href="/leaderboards"
          className={pathname === "/leaderboards" ? styles.active : ""}
        >
          Leaderboards
        </Link>
      </div>
    </nav>
  );
}

export default Nav;