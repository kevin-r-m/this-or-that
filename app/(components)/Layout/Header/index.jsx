import Nav from "./Nav";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  );
}

export default Header;
