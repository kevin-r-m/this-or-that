"use client";

import { useContext, createContext, useState } from 'react';
import data from '../../data/competition.json';

const YesterdayContext = createContext();

export function useYesterdayContext() {
    return useContext(YesterdayContext);
}

export function YesterdayContextProvider({ children })  {
    const [competitionState] = useState(data);

    const contextValues = {
        competitionState,
    }

    return (
        <YesterdayContext.Provider value={contextValues}>
            { children }
        </YesterdayContext.Provider>
    )
}