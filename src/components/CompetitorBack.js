import React from 'react';

function CompetitorBack({competitorInfo, flipState}) {
    return (
        <div>

            {flipState ? 
                
                <div className="competitor-description-wrapper">
                    <div>
                        <p className="more-info-text">
                            {competitorInfo.description}
                        </p>
                    </div>
                </div>
            :
            null
            
        }
        </div>
    )
}

export default CompetitorBack;