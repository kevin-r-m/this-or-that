import Link from "next/link";

function index() {
  return (
    <nav>
      <Link href="/compeition">Today</Link>
      <Link href="/competitors">Competitors</Link>
      <Link href="/leaderboards">Leaderboards</Link>
    </nav>
  );
}

export default index;
