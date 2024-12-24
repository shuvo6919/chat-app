import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { UseAppContext } from "../Context/AppContextProvider"


const useGetConversations = () => {
    const { backendUrl } = UseAppContext()
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    const getConversations = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(backendUrl + "/api/users", { withCredentials: true, })
            console.log(data);

            if (!data.success) {
                toast.error(data.message)

            }

            setConversations(data)
        } catch (error) {

            toast.error(error.message)

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getConversations()
    }, [])

    return { loading, conversations }
}

export default useGetConversations