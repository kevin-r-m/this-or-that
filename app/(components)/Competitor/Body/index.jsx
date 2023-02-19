import Image from "../../Global/Image";
import Button from "../Button";
import styles from "./body.module.scss";
import placeholderImage from "/public/images/placeholder-image.webp";

function Body() {
  return (
    <div className={styles.body}>
      <div className={styles.imageContainer}>
        <Image alt="" source={placeholderImage} />
      </div>
      <div className={styles.buttonsContainer}>
        <Button value="Go to profile" />
        <Button value="Vote" vote />
      </div>
    </div>
  );
}

export default Body;
