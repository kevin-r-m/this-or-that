import Body from "../Body";
import Headline from "../Headline";
import styles from "./container.module.scss";

function index() {
  return (
    <section className={styles.wrapper}>
      <Headline />
      <Body />
    </section>
  );
}

export default index;
