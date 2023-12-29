import { useState } from "react";
import { Button, Image } from "../../Atoms";
import thumbsUp from "../../../../public/images/dislike.svg";
import styles from "./goodluck.module.scss";

function GoodLuckButton({ onClick, value }) {

    function handleClick(e) {
        onClick(e);
      }

    return (
        <Button onClick={handleClick}>
            <span>{value}</span>
        </Button>
    );

}

function Goodluck({ loserName }) {
    const [goodLuckCount, setGoodLuckCount] = useState(274);

    function wishGoodLuck() {
        setGoodLuckCount(prevState => prevState + 1);
    }

    return (
        <div className={styles.goodluck}>
            <p>Want to wish good luck to {loserName} in their next competition?</p>
            <div className={styles.wish}>
                <GoodLuckButton value="Wish good luck!" onClick={wishGoodLuck} />
                <div className={styles.count}>
                    <span>{goodLuckCount}</span>
                    <div className={styles.thumbContainer}>
                        <Image source={thumbsUp} alt="Thumbs Up" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Goodluck;