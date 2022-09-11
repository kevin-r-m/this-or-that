import React, { useState, useRef } from 'react';
import '../styles/competitor.scss';
import batman from '../images/batman.jpeg';

function Competitor(props) {

    const [showInfo, setShowInfo] = useState('');
    const elementRef = useRef()

    function handleClick(e){
        e.preventDefault();
        if(showInfo === ' show'){
            setShowInfo('');
            elementRef.current.innerHTML = 'See more info +'
            return
        }
        setShowInfo(' show');
        elementRef.current.innerHTML = 'Hide more info -'
    }

    function openModal(e){
        e.preventDefault();
        props.setSelectedCompetitor(e.target.dataset.competitor);
        props.setModalShowState(!props.modalShowState);
    }

    return (
        <>
            <div className="competitor-container">
                <div className="competitor-title">
                    <h3>{props.competitorInfo.name}</h3>
                    <p className="more-info-toggle" onClick={handleClick} ref={elementRef}>See more info +</p>
                </div>
                <div className={"more-info-container" + showInfo}>
                    <div className="more-info-body">
                        <p>{props.competitorInfo.description}</p>
                        <a href="#" className="competitor-link" >Go to competitor profile</a>
                    </div>
                </div>
                <div className="competitor-image-wrapper">
                        <img src={batman} alt="batman" />
                    <div className="voting-container">
                        <button className="vote-button" onClick={openModal} data-competitor={props.competitorInfo.name}>Cast vote for {props.competitorInfo.name}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Competitor;