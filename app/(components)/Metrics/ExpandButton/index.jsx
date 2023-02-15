import Image from "next/image";
import styles from "./expandButton.module.scss";

function ExpandButton({ callback }) {
  return (
    <button className={styles.expandButton} onClick={callback}>
      <Image src="/images/cross.svg" alt="Toggle" width={"20"} height={"20"} />
    </button>
  );
}

export default ExpandButton;
