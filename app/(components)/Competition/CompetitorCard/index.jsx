import Body from "./Body";
import Headline from "./Headline";
import styles from "./competitorCard.module.scss";

function index({ competitorName }) {
  return (
    <>
      <div className={styles.wrapper}>
        <Headline competitorName={competitorName} />
        <Body />
      </div>
    </>
  );
}

export default index;
