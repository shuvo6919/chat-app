import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext()

export const UseAppContext = () => {
    return useContext(AppContext)
}

const AppContextProvider = ({ children }) => {

    const [showMenu, setShowMenu] = useState(false)
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const info = {
        showMenu, setShowMenu, backendUrl
    }
    return (
        <AppContext.Provider value={info}>
            {children}
        </AppContext.Provider >
    );
};

export default AppContextProvider;