import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import '../../styles/modal.scss'

function VoteConfirmation({handleModal, handleVote, selectedCompetitor, votedToday}) {

    const [votedFor, setVotedFor] = useState();

    useEffect(() => {
        setVotedFor(window.localStorage.getItem('lastVotedFor'));
    }, [votedToday])

    return (
        <>
            <div className="modal-overlay"></div>
            <div className="modal-container">
                <div className="modal-header-container">
                    <h3 className="modal-header">{selectedCompetitor}</h3>
                    <button className="modal-close" onClick={handleModal}></button>
                </div>
                <div className="modal-body">
                    {votedToday ? 
                        <>
                            <p>Hold your horses, looks like you already voted today.</p> 
                            <p>You voted for: {votedFor}</p>
                        </>
                        : 
                        <p>Lock it in below or take another look.</p>}
                </div>
                <div className="modal-selections">
                    <button onClick={handleVote}>Lock it in</button>
                    <button onClick={handleModal}>Not sure actually</button>
                </div>
            </div>
        </>
    );
}

export default VoteConfirmation;