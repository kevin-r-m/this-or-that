import React, { useState, useEffect } from 'react';
import api from '../../../api'

function Competitors() {
    const [competitorsState, setCompetitorsState] = useState([])

    useEffect(() =>{
        api.getAllCompetitors().then(competitors => {
            setCompetitorsState(competitors.data.data)
        })
    }, [])

    return (
        <div>
            {
                competitorsState.length > 0 ?

                competitorsState.map((competitor, index)=> {
                    return <p key={index}>{competitor.name}</p>
                })

                :
                null
            }
        </div>
    );
}

export default Competitors;