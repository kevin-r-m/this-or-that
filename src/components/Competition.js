import React, { useState } from 'react';
import Competitor from './Competitor';
import data from '../testData/data.json'
import '../styles/competiton.scss'
import VoteConfirmation from './modals/VoteConfirmation';

function Competition() {
    
    const [modalShowState, setModalShowState] = useState(false);

    return (
        <div className={"competition-wrapper"}>
            <Competitor 
            competitorInfo={data[0]}
            setModalShowState={setModalShowState}
            modalShowState={modalShowState}
            key={1}/>

            <div class="versus-text-wrapper">
                <p>vs.</p>
            </div>

            <Competitor 
            competitorInfo={data[1]}
            setModalShowState={setModalShowState}
            modalShowState={modalShowState}
            key={4}/>
            {
                modalShowState ? 

                <div>
                    <VoteConfirmation 
                    setModalShowState={setModalShowState}
                    modalShowState={modalShowState}/>
                </div>

                :

                null
            }
        </div>
    );
}

export default Competition;