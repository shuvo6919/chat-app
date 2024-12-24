import { useEffect, useState } from 'react';
import useConversation from '../Zustand/useConversation';
import { toast } from 'react-toastify';
import axios from 'axios';
import { UseAppContext } from '../Context/AppContextProvider';

const useGetMessages = () => {
    const { backendUrl } = UseAppContext()
    const [loading, setLoading] = useState(false)
    const { selectedConversation, setSelectedConversation, messages, setMessages } = useConversation()

    const getMessages = async () => {
        setLoading(true)
        try {

            const { data } = await axios.get(backendUrl + `/api/message/${selectedConversation?._id}`, { withCredentials: true, })
            setMessages(data)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        if (selectedConversation?._id) {
            getMessages()
        }
    }, [selectedConversation?._id, setMessages])

    return { loading, messages }
};

export default useGetMessages;