"use client";

import { useContext, createContext, useState } from 'react';
import data from '../../data/competition.json';
import { getCookie } from '@/app/functions';

const GOOD_LUCK_COOKIE = 'goodluck';

const YesterdayContext = createContext();

export function useYesterdayContext() {
    return useContext(YesterdayContext);
}

export function YesterdayContextProvider({ children })  {
    const [competitionState] = useState(data);
    const [goodLuckCount, setGoodLuckCount] = useState(274);
    const [wished, setWished] = useState(false);

    function wishGoodLuck() {
        // hit api to update good luck count

        // if successful update state with response
        setGoodLuckCount(prevState => prevState + 1);

        // update state to show that user has wished
        setWished(true);
        
    }

    const contextValues = {
        competitionState,
        goodLuckCount, 
        wished,
        wishGoodLuck
    }

    return (
        <YesterdayContext.Provider value={contextValues}>
            { children }
        </YesterdayContext.Provider>
    )
}