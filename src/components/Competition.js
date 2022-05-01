import React from 'react';
import Competitor from './Competitor';
import data from '../testData/data.json'
import '../styles/competiton.scss'

function Competition() {

    return (
        <div className={"competition-wrapper"}>
            <Competitor competitorInfo={data[0]} key={1}/>

            <div class="versus-text-wrapper">
                <p>vs.</p>
            </div>

            <Competitor competitorInfo={data[1]} key={4}/>
        </div>
    );
}

export default Competition;