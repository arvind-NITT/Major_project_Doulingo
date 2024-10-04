import React, { createContext, useContext, useState } from 'react';
// import { fetchLocationData } from './APICalls'

const MyContext = createContext();


export const useDuolingoContext = () => {
    return useContext(MyContext);
};


export const DuoProvider = ({ children }) => {

       const [active_component,set_active_component]= useState(0);

    return (
        <MyContext.Provider value={{ active_component,set_active_component }}>
            {children}
        </MyContext.Provider>
    )

}

