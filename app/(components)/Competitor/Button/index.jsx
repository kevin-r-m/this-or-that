import styles from "./button.module.scss";

function index({ callback, value }) {
  return <button className={styles.button}>{value}</button>;
}

export default index;
