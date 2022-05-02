import React, { useState, useRef } from 'react';
import '../styles/competitor.scss';

function Competitor({competitorInfo}) {

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

    return (
        <div className="competitor-container">
            <div className="competitor-title">
                <h3>{competitorInfo.name}</h3>
            </div>
            <p className="more-info-toggle" onClick={handleClick} ref={elementRef}>See more info +</p>
            <div className={"more-info-container" + showInfo}>
                <p className="more-info-body">
                    {competitorInfo.description}
                </p>
            </div>
            <div className="competitor-image-wrapper">
                <img src={competitorInfo.image} alt="batman" />
            </div>
        </div>
    );
}

export default Competitor;