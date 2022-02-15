import React from 'react';
import CompetitorFront from './CompetitorFront';
import CompetitorBack from './CompetitorBack';
import data from '../testData/data.json'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import ReverseButton from './ReverseButton';


function Competition() {

    const [flipStateOne, setFlipStateOne] = useState(false)
    const [flipStateTwo, setFlipStateTwo] = useState(false)

    const handleClickOne = (event) => {
        event.preventDefault();
        setFlipStateOne(!flipStateOne)

    }
    const handleClickTwo = (event) => {
        event.preventDefault();
        setFlipStateTwo(!flipStateTwo)

    }

    // console.log(data)

    return (
        <div className="competition-wrapper">
            <div className="competitor-wrapper competitor-one">
                <div class="competitor-title-wrapper">
                    <div className="competitor-title">
                        <h3>{data[0].name}</h3>
                    </div>
                </div>
                <ReactCardFlip isFlipped={flipStateOne} flipDirection="horizontal" key={0}>
                    <CompetitorFront competitorInfo={data[0]} key={1}/>
                    <CompetitorBack competitorInfo={data[0]} key={2} flipState={flipStateOne}/>
                </ReactCardFlip>
                <ReverseButton handleClick={handleClickOne}/>
            </div>

            <div class="versus-text-wrapper">
                <p>vs.</p>
            </div>

            <div className="competitor-wrapper competitor-two">
                <div class="competitor-title-wrapper">
                    <div className="competitor-title">
                        <h3>{data[1].name}</h3>
                    </div>
                </div>
                <ReactCardFlip isFlipped={flipStateTwo} flipDirection="horizontal" key={3}>
                    <CompetitorFront competitorInfo={data[1]} key={4}/>
                    <CompetitorBack competitorInfo={data[1]} key={5}  flipState={flipStateTwo}/>
                </ReactCardFlip>
                <ReverseButton handleClick={handleClickTwo}/>
            </div>
        </div>
    );
}

export default Competition;