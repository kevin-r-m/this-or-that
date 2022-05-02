import React from 'react';
import '../../styles/modal.scss'

function VoteConfirmation(props) {

    function modalClose(e){
        e.preventDefault()
        props.setModalShowState(!props.modalShowState)
    }

    return (
        <div className="modal-container">
            <h3 className="modal-header">No turning back!</h3>
            <button onClick={modalClose}>x</button>
            <p>You are about to cast your vote for Batman, there is no going back so please confirm below.</p>
        </div>
    );
}

export default VoteConfirmation;