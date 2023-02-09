"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/competition"
        className={pathname === "/competition" ? "active" : ""}
      >
        Today
      </Link>
      <Link
        href="/competitors"
        className={pathname === "/competitors" ? "active" : ""}
      >
        Competitors
      </Link>
      <Link
        href="/leaderboards"
        className={pathname === "/leaderboards" ? "active" : ""}
      >
        Leaderboards
      </Link>
    </nav>
  );
}

export default Nav;
