import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthContext } from '../Context/AuthContextProvider';
import useConversation from '../Zustand/useConversation';
import { UseAppContext } from '../Context/AppContextProvider';

const useLogout = () => {
    const { backendUrl } = UseAppContext()
    const { setAuthUser } = useAuthContext()
    const [loading, setLoading] = useState(false)

    const logout = async () => {
        setLoading(true)
        try {
            const { data } = await axios.post(backendUrl + "/api/auth/logout")
            if (data.success) {
                toast.success(data.message)
                localStorage.removeItem('chat-user')
                setAuthUser(null)

            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }

    }

    return { loading, logout }
};

export default useLogout;