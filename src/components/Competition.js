import React, { useState, useEffect } from 'react';
import Competitor from './Competitor';
import data from '../testData/data.json'
import '../styles/competiton.scss'
import VoteConfirmation from './modals/VoteConfirmation';

function Competition() {
    
    const [modalShowState, setModalShowState] = useState(false);
    const [selectedCompetitor, setSelectedCompetitor] = useState('');
    const [currentDate, setCurrentDate] = useState();
    const [previousDate, setPreviousDate] = useState();

    useEffect(() => {
        handleDateUpdates();
    }, [])

    function handleDateUpdates(){
        let today = new Date();
        let yesterday = new Date(today);

        yesterday.setDate(yesterday.getDate() - 1);
        today = handleDateFormat(today);
        yesterday = handleDateFormat(yesterday);

        setCurrentDate(today);
        setPreviousDate(yesterday);
    }

    function handleDateFormat(date){
        const dd = String(date.getDate());
        const mm = String(date.getMonth() + 1);
        const yyyy = date.getFullYear();
        date = mm + dd + yyyy;

        return date;
    }

    function handleLocalCheck(){
        
    }

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