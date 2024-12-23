import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContextProvider";
import io from "socket.io-client"
export const SocketContext = createContext()


export const useSocketContex = () => {
    return useContext(SocketContext)
}

const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([])
    const { authUser } = useAuthContext()

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:4000", {
                query: {
                    userId: authUser._id
                }
            })

            setSocket(socket)

            //socket.on() is used to listen to the events. can be used both on client and server side
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })

            return () => socket.close()
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    }, [authUser])

    const info = {
        socket, onlineUsers

    }
    return (
        <SocketContext.Provider value={info}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;