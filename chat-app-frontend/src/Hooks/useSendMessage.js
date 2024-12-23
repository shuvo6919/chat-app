import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import useConversation from "../Zustand/useConversation"


const useSendMessage = () => {
    const backendUrl = "http://localhost:4000"
    const { selectedConversation, setSelectedConversation, messages, setMessages } = useConversation()
    const [loading, setLoading] = useState(false)


    const sendMessage = async (message) => {
        setLoading(true)
        try {
            const { data } = await axios.post(backendUrl + `/api/message/send/${selectedConversation?._id}`, { message }, { withCredentials: true, })
            console.log(data);
            if (data.success) {
                setMessages([...messages, data.newMessage])
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, sendMessage }
}

export default useSendMessage