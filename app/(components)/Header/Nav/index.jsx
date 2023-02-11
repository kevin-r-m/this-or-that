"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.scss";

function Nav() {
  const pathname = usePathname();

  return (
    <nav className={"container " + styles.nav}>
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
    </nav>
  );
}

export default Nav;
