import React, { useState } from 'react';
import Competitor from './Competitor';
import data from '../testData/data.json'
import '../styles/competiton.scss'
import VoteConfirmation from './modals/VoteConfirmation';

function Competition() {
    
    const [modalShowState, setModalShowState] = useState(false);
    const [selectedCompetitor, setSelectedCompetitor] = useState('');

    return (
        <div className={"competition-wrapper"}>
            <Competitor 
            setSelectedCompetitor={setSelectedCompetitor}
            competitorInfo={data[0]}
            setModalShowState={setModalShowState}
            modalShowState={modalShowState}
            key={1}/>

            <div className="versus-text-wrapper">
                <p>vs.</p>
            </div>

            <Competitor 
            setSelectedCompetitor={setSelectedCompetitor}
            competitorInfo={data[1]}
            setModalShowState={setModalShowState}
            modalShowState={modalShowState}
            key={4}/>
            {
                modalShowState ? 

                <div>
                    <VoteConfirmation
                    selectedCompetitor={selectedCompetitor}
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