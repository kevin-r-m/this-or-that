import { Button, Image } from "../../Atoms";
import thumbsUp from "../../../../public/images/dislike.svg";
import styles from "./goodluck.module.scss";
import Confetti from "react-dom-confetti";
import { useYesterdayContext } from "../YesterdayContextProvider";

function GoodLuckButton({ onClick, value, wished }) {

      const confettiConfig = {
        angle: 90,
        spread: 180,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        rotate: true,
      };

    return (
        <Button onClick={onClick} disabled={wished}>
            <Confetti active={wished} config={confettiConfig} />
            <span>{value}</span>
        </Button>
    );

}

function Goodluck({ loserName }) {
    const { goodLuckCount, wished, wishGoodLuck } = useYesterdayContext();

    return (
        <div className={styles.goodluck}>
            <p>Want to wish good luck to {loserName} in their next competition?</p>
            <div className={styles.wish}>
                <GoodLuckButton value={wished ? `${loserName} says thanks!` : "Wish good luck!"} onClick={wishGoodLuck} wished={wished} />
                <div className={styles.count}>
                    <span>{goodLuckCount}</span>
                    <div className={styles.thumbContainer} title={`${goodLuckCount} wishes of good luck`}>
                        <Image source={thumbsUp} alt="Thumbs Up" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Goodluck;