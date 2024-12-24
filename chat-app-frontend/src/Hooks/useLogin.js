import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import { useAuthContext } from "../Context/AuthContextProvider"
import { UseAppContext } from "../Context/AppContextProvider"


const useLogin = () => {
    const { backendUrl } = UseAppContext()
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const login = async (userName, password) => {
        setLoading(true)
        try {

            const { data } = await axios.post(backendUrl + "/api/auth/login",
                { userName, password },
                { withCredentials: true, }
            )

            if (data.success) {
                toast.success(data.message)
                localStorage.setItem('chat-user', JSON.stringify(data))
                setAuthUser(data)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { login, loading }
}

export default useLogin