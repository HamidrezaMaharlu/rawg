import {createContext, ReactNode} from "react";
import React from 'react';

const dataContext = createContext({})

interface Props{
    children:ReactNode
}

function DataContextProvider({children}: Props) {
    return (
        <dataContext.Provider value={{}}>
            {children}
        </dataContext.Provider>
    );
}

export default DataContextProvider;