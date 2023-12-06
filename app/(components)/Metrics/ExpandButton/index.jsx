import Image from "next/image";
import styles from "./expandButton.module.scss";

function ExpandButton({ onClick, isActive }) {

  return (
    <button className={styles.expandButton} onClick={onClick}>
      <Image className={isActive ? styles.active : undefined} src="/images/caret.svg" alt="Toggle" width={"20"} height={"20"} />
    </button>
  );
}

export default ExpandButton;
