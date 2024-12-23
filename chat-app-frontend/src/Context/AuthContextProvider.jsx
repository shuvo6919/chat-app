import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(localStorage.getItem('chat-user') ? JSON.parse(localStorage.getItem('chat-user')) : null)

    const info = {
        authUser, setAuthUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthContextProvider;