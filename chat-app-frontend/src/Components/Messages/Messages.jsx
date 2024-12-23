import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../Hooks/useGetMessages';
import useListenMessages from '../../Hooks/useListenMessages';

const Messages = () => {
    const { messages, loading } = useGetMessages()

    //getting message using socket
    useListenMessages()

    const lastMessageRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 10);
    }, [messages])


    return (
        <div className='px-4 flex-1 overflow-auto'>


            {
                !loading && messages.length > 0 && messages.map((message, idx) =>
                    <div key={message?._id} ref={lastMessageRef}>
                        <Message message={message}></Message>
                    </div>)
            }

            {
                !loading && messages.length === 0 && <p className='text-center'>Send a message to start the conversation.</p>
            }

            {
                loading && [...Array(2)].map((_, idx) => <div key={idx} className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>)
            }
        </div>
    );
};

export default Messages;