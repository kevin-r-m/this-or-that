import Image from "next/image";
import styles from "./image.module.scss";

function NewImage({ source, alt }) {
  return (
    <div className={styles.image}>
      <Image src={source} alt={alt} fill priority />
    </div>
  );
}

export default NewImage;
