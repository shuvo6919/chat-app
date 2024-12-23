import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"


const useGetConversations = () => {
    const backendUrl = "http://localhost:4000"
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