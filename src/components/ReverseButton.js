import React from 'react';

function ReverseButton({handleClick}) {
    return (
        <div className="competitor-flip-wrapper">
                <p class="details-text">See more details</p>
                <div className="reverse-button" onClick={handleClick}>&#8635;</div>
            </div>
    );
}

export default ReverseButton;