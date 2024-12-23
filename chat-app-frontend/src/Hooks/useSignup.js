import { useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useAuthContext } from "../Context/AuthContextProvider";
const useSignup = () => {


    const { authUser, setAuthUser } = useAuthContext()
    const backendUrl = "http://localhost:4000"

    const [loading, setLoading] = useState(false)

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {

        const success = handleInputErrors(fullName, userName, password, confirmPassword, gender)
        if (!success) return
        setLoading(true)
        try {
            const { data } = await axios.post(backendUrl + "/api/auth/signup", { fullName, userName, password, confirmPassword, gender }, { withCredentials: true, })
            if (data.success) {
                toast.success(data.message)
                console.log(data);

                localStorage.setItem('chat-user', JSON.stringify(data))
                setAuthUser(data)

            } else {
                console.log(data);

                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }


    return { loading, signup }

};


const handleInputErrors = (fullName, userName, password, confirmPassword, gender) => {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error("Missing data")
        return false
    }
    if (password !== confirmPassword) {
        toast.error("Password doesn't match")
        return false
    }
    if (password.length < 8) {
        toast.error("Password must have at least 8 characters.")
        return false
    }

    return true
}

export default useSignup;