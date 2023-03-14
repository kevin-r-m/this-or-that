"use client";

import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.scss";
import AnimatedButton from "./AnimatedButton";

function Nav() {
  const pathname = usePathname();
  const navMenuRef = useRef();
  const animatedButtonRef = useRef();

  function animateButton(reference) {
    const { current } = reference;
    current.classList.toggle(styles.opened);
    current.setAttribute(
      "aria-expanded",
      current.classList.contains(styles.opened)
    );
  }

  function toggleMenu() {
    animateButton(animatedButtonRef);
    const elementClasses = navMenuRef.current.classList;
    elementClasses.toggle(styles.expanded);
    if (elementClasses.contains(styles.expanded)) {
      document.querySelector("body").style.overflow = "hidden";
      return;
    }
    document.querySelector("body").style.overflow = "auto";
  }

  return (
    <nav className={"container " + styles.nav}>
      <AnimatedButton buttonRef={animatedButtonRef} toggleMenu={toggleMenu} />
      <div ref={navMenuRef} className={styles.navItems}>
        <Link
          href="/competition"
          className={pathname === "/competition" ? styles.active : ""}
          onClick={toggleMenu}
        >
          Today
        </Link>
        <Link
          href="/competitors"
          className={pathname === "/competitors" ? styles.active : ""}
          onClick={toggleMenu}
        >
          Competitors
        </Link>
        <Link
          href="/leaderboards"
          className={pathname === "/leaderboards" ? styles.active : ""}
          onClick={toggleMenu}
        >
          Leaderboards
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
