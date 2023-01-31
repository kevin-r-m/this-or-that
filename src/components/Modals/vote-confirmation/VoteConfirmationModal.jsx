import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import '../modal.scss'
import styles from './VoteConfirmationModal.module.scss'

function VoteConfirmationModal({handleModal, handleVote, selectedCompetitor, votedToday}) {

    const [lastVotedFor, setLastVotedFor] = useState();

    useEffect(() => {
        setLastVotedFor(window.localStorage.getItem('lastVotedFor'));
    }, [votedToday])

    return (
        <>
            <div className={styles.modalOverlay}></div>
            <div className={styles.modalContainer}>
                <div className={styles.modalHeaderContainer}>
                    {votedToday ? <h3 className={styles.modalHeader}>Oops!</h3> : <h3 className={styles.modalHeader}>{selectedCompetitor}</h3>}
                    <button className={styles.modalClose} onClick={handleModal}></button>
                </div>
                <div className={styles.modalBody}>
                    {votedToday ? 
                        <>
                            <p>Looks like you already voted for <span className={styles.lastVotedFor}>{lastVotedFor}</span> today.</p> 
                            <p>Check back tomorrow for the winner and next competition</p>
                            <button onClick={handleModal}>Close</button>
                        </>
                        : 
                        <p>Lock it in below or take another look.</p>
                    }
                </div>
                {votedToday ? 
                    null 
                    :
                    <div className={styles.modalSelections}>
                        <button onClick={handleVote}>Lock it in</button>
                        <button onClick={handleModal}>Not sure actually</button>
                    </div>
                }
            </div>
        </>
    );
}

export default VoteConfirmationModal;