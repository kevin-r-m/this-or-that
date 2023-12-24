import styles from "./today.module.scss";

function Today() {
  let date = new Date();
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = date.getFullYear();

  date = mm + "/" + dd + "/" + yyyy;

  return (
    <>
      <p className={styles.date}>{date}</p>
    </>
  );
}

export default Today;
