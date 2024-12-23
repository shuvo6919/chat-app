import { useEffect } from "react";
import { useSocketContex } from "../Context/SocketContextProvider";
import useConversation from "../Zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3"

const useListenMessages = () => {

    const { socket } = useSocketContex()
    const { messages, setMessages } = useConversation()

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true
            const sound = new Audio(notificationSound)
            sound.play()
            setMessages([...messages, newMessage])
        })

        return () => socket?.off("newMessage")
    }, [socket, messages, setMessages])

};

export default useListenMessages;