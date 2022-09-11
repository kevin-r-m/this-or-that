import React, { useState, useEffect } from 'react';
import Competitor from './Competitor';
import data from '../testData/data.json'
import '../styles/competiton.scss'
import VoteConfirmation from './modals/VoteConfirmation';
import apis from '../api'

function Competition() {
    
    const [modalShowState, setModalShowState] = useState(false);
    const [selectedCompetitor, setSelectedCompetitor] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [votedToday, setVotedToday] = useState('');
    const [lastCastDate, setLastCastDate] = useState('');

    useEffect(() => {
        updateDates();
    });


    //opening and closing the modal
    function handleModal(){
        setModalShowState(!modalShowState);
    }
    
    //updates currentDate and localState states
    function updateDates(){
        let today = new Date();
        // let yesterday = new Date(today);
        
        // yesterday.setDate(yesterday.getDate() - 1);
        today = handleDateFormat(today);
        
        setCurrentDate(today);
        setLastCastDate(window.localStorage.getItem('lastCastDate'));
    }
    
    function handleDateFormat(date){
        const dd = String(date.getDate());
        const mm = String(date.getMonth() + 1);
        const yyyy = date.getFullYear();
        date = mm + dd + yyyy;
        
        return date;
    }
    
    function handleLocalCheck(){
        if(lastCastDate !== currentDate){
            setVotedToday(false);
        }else {
            setVotedToday(true);
        }
    }
    
    function handleVote(){
        handleLocalCheck();
        if(votedToday){
            //will need to add handler for sending user failed state
            return
        }else{
            handleModal();
            updateLastCastDate();
            setVotedFor();
        }
    }
    
    function updateLastCastDate(){
        window.localStorage.setItem('lastCastDate', currentDate)
    }

    function setVotedFor(){
        window.localStorage.setItem('lastVotedFor', selectedCompetitor)
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

                <>
                    <VoteConfirmation
                    selectedCompetitor={selectedCompetitor}
                    setModalShowState={setModalShowState}
                    modalShowState={modalShowState}
                    handleModal={handleModal}
                    handleVote={handleVote}
                    votedToday={votedToday}/>
                </>

                :

                null
            }
        </div>
    );
}

export default Competition;