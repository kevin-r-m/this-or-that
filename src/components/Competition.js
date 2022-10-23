import React, { useState, useEffect } from 'react';
import Competitor from './Competitor';
import data from '../testData/competitorData.json'
import '../styles/competiton.scss'
import VoteConfirmationModal from './modals/VoteConfirmationModal';
import apis from '../api'
import Metrics from './Metrics';

function Competition() {
    
    const [modalShowState, setModalShowState] = useState(false);
    const [selectedCompetitor, setSelectedCompetitor] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [votedToday, setVotedToday] = useState('');
    const [lastCastDate, setLastCastDate] = useState('');

    useEffect(() => {
        updateDates();
        handleLocalCheck();
    });


    //opening and closing the modal
    function handleModal(){
        setModalShowState(!modalShowState);
    }
    
    //updates currentDate and localState states
    function updateDates(){
        let today = new Date();
        today = handleDateFormat(today);
        setCurrentDate(today);
        setLastCastDate(window.localStorage.getItem('lastCastDate'));
    }    

    //puts the date into a concat string
    function handleDateFormat(date){
        const dd = String(date.getDate());
        const mm = String(date.getMonth() + 1);
        const yyyy = date.getFullYear();
        date = mm + dd + yyyy;
        
        return date;
    }
    
    //checks if a user has voted already today
    function handleLocalCheck(){
        if(lastCastDate !== currentDate){
            setVotedToday(false);
        }else {
            setVotedToday(true);
        }
    }
    
    //confirms if user has voted, processes vote if not
    function handleVote(){
        if(votedToday){
            //will need to add handler for sending user failed state
            return
        }else{
            handleModal();
            updateLastCastDate();
            setVotedFor();
        }
    }

    //updates localStorage of last date vote casted
    function updateLastCastDate(){
        window.localStorage.setItem('lastCastDate', currentDate)
    }

    //updates localStorage of last item voted for
    function setVotedFor(){
        window.localStorage.setItem('lastVotedFor', selectedCompetitor)
    }

    return (
        <>
        <Metrics />
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
                    <VoteConfirmationModal
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
        </>
    );
}

export default Competition;