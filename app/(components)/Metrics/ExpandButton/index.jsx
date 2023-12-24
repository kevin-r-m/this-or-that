import { useState } from "react";
import Image from "next/image";
import styles from "./expandButton.module.scss";
import classnames from "classnames/bind";

function ExpandButton({ onClick, isActive }) {
  const [isAnimated, setIsAnimated] = useState(false);

  function handleClick(e) {
    setIsAnimated(true);
    onClick(e);
  }

  const cx = classnames.bind(styles);

  const buttonClasses = cx({
    expandButton: true,
    animated: isAnimated,
    active: isActive,
  });

  return (
    <div className={styles.shadow}>
      <button className={buttonClasses} onClick={handleClick} title="Toggle Metric Graph">
        <Image src="/images/caret.svg" alt="Toggle" width={"20"} height={"20"} />
      </button>
    </div>
  );
}

export default ExpandButton;
