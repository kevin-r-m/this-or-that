import React from 'react';

function CompetitorFront({competitorInfo}) {

    return (
        <div>
            <div className="competitor-image-wrapper">
                <img src={competitorInfo.image} alt="batman" />
            </div>
        </div>
    );
}

export default CompetitorFront;