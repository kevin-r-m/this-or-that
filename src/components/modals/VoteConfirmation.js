import React from 'react';
import '../../styles/modal.scss'

function VoteConfirmation(props) {

    function modalClose(e){
        e.preventDefault()
        props.setModalShowState(!props.modalShowState)
    }

    return (
        <div className="modal-container">
            <div className="modal-header-container">
                <h3 className="modal-header">You chose {props.selectedCompetitor}!</h3>
                <button className="modal-close" onClick={modalClose}></button>
            </div>
            <div className="modal-body">
                <p>Lock it in below or take another look.</p>
            </div>
            <div className="modal-selections">
                <button>Lock it in</button>
                <button onClick={modalClose}>Take another look</button>
            </div>
        </div>
    );
}

export default VoteConfirmation;