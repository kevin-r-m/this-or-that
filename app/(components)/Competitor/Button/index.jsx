import styles from "./button.module.scss";
import classNames from "classnames/bind";

function index({ callback, value, vote }) {
  const cx = classNames.bind(styles);

  const buttonClass = cx({
    button: true,
    vote: vote,
  });

  return <button className={buttonClass}>{value}</button>;
}

export default index;
