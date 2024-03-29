import styles from './winner-card.module.scss';

function WinnerCard({ winnerName }) {
    return (
        <section className={styles.wrapper}>
            <h3>Yesterday's Winner</h3>
            <div className={styles.winnerContent}>
                <div className={styles.winnerIcon}></div>
                <h4>{winnerName}</h4>
            </div>
        </section>
    );
}

export default WinnerCard;