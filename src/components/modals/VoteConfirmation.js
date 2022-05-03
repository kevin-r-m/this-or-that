import React from 'react';
import '../../styles/modal.scss'

function VoteConfirmation(props) {

    function modalClose(e){
        e.preventDefault()
        props.setModalShowState(!props.modalShowState)
    }

    return (
        <div className="modal-container">
            <h3 className="modal-header">You chose {props.selectedCompetitor}!</h3>
            <div className="modal-body">
                <button onClick={modalClose}>x</button>
                <p>Lock it in below or take another look.</p>
                <button>Lock it in</button>
                <button>Close</button>
            </div>
        </div>
    );
}

export default VoteConfirmation;