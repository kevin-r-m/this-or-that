import { useState } from "react";
import Image from "next/image";
import styles from "./expandButton.module.scss";

function ExpandButton({ callback }) {
  const [active, setActive] = useState(false);

  function handleClick(e) {
    setActive((prevState) => !prevState);

    if (callback) callback(e);
  }

  return (
    <button className={styles.expandButton} onClick={handleClick}>
      <Image className={active && styles.active} src="/images/caret.svg" alt="Toggle" width={"20"} height={"20"} />
    </button>
  );
}

export default ExpandButton;
