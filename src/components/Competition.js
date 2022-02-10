import React from 'react';
import Competitor from './Competitor';
import competitorImageBatman from '../images/batman.jpeg'
import competitorImageApplepie from '../images/apple-pie.jpeg'
import data from '../testData/data.json'


function Competition() {
    return (
        <div>
            <div className="competition-wrapper">
                {
                    data.map(item => {
                        return (

                            <div className="competitor-container">
                                <Competitor competitorInfo={item} key={item.id} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Competition;