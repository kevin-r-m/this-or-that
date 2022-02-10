import React from 'react';
import { useState } from 'react';
import competitorImageBatman from '../images/batman.jpeg'
import competitorImageApplepie from '../images/apple-pie.jpeg'

function Competitor({competitorInfo}) {

    const [infoState, setInfoState] = useState(false)

    const toggleInfo = () => {
        setInfoState(!infoState)
    }



    return (
        <div>
            <div className="competitor-wrapper">
                <div class="competitor-title-wrapper">
                    <div className="competitor-title">
                        <h3>{competitorInfo.name}</h3>
                    </div>
                </div>
                <div className="competitor-image-wrapper">
                    <img src={competitorInfo.image} alt="batman" />
                </div>
                <div className="competitor-description-wrapper">
                    {
                        (infoState) ? 
                        <div>
                            <p className="more-info-selection" onClick={toggleInfo}>Hide info</p>
                            <p className="more-info-text">
                                {competitorInfo.description}
                            </p>
                        </div>
                        :
                        <p className="more-info-selection" onClick={toggleInfo}>See more info</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default Competitor;