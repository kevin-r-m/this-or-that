import React from 'react';
import '../styles/competitor.scss';

function Competitor({competitorInfo}) {

    return (
        <div className="competitor-container">
            <div className="competitor-title">
                <h3>{competitorInfo.name}</h3>
            </div>
            <p className="more-info">See more info +</p>
            <div className="competitor-image-wrapper">
                <img src={competitorInfo.image} alt="batman" />
            </div>
        </div>
    );
}

export default Competitor;