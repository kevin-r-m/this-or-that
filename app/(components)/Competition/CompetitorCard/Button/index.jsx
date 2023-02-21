import styles from "./button.module.scss";
import classNames from "classnames/bind";

function index({ callback, value, vote, confirm, decline }) {
  const cx = classNames.bind(styles);

  const buttonClass = cx({
    button: true,
    vote: vote,
    confirm: confirm,
    decline: decline,
  });

  return (
    <button onClick={callback} className={buttonClass}>
      {value}
    </button>
  );
}

export default index;
