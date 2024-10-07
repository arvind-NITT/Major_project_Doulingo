import React, { createContext, useContext, useState } from 'react';
// import { fetchLocationData } from './APICalls'

const MyContext = createContext();


export const useDuolingoContext = () => {
    return useContext(MyContext);
};


export const DuoProvider = ({ children }) => {

       const [activeComponent,setActiveComponent]= useState(0);

    return (
        <MyContext.Provider value={{ activeComponent,setActiveComponent }}>
            {children}
        </MyContext.Provider>
    )

}

