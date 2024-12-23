import React from 'react';
import { useAuthContext } from '../../Context/AuthContextProvider';
import useConversation from '../../Zustand/useConversation';
import { extractTime } from '../../Utilities/extractTime';

const Message = ({ message }) => {
    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation()
    const fromMe = authUser?._id === message?.senderId
    const chatClassName = fromMe ? "chat-end" : "chat-start"
    const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic
    const bubbleBgColor = fromMe ? "bg-blue-500" : ""
    const shakeClass = message.shouldShake ? "shake" : ""
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs fkex gap-1 items-center'>{extractTime(message.createdAt)}</div>

        </div>

    );
};

export default Message;