import { BsSend } from "react-icons/bs";
import useSendMessage from "../../Hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
    const { loading, sendMessage } = useSendMessage()
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return
        await sendMessage(message)
        setMessage("")
    }
    return (
        <form onSubmit={handleSubmit} className="px-4 my-3">
            <div className="w-full relative ">
                <input type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                    placeholder="Send a message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3 ">

                    {
                        loading ? <span className="loading loading-ring loading-xs"></span> : <BsSend />
                    }
                </button>
            </div>
        </form>
    );
};

export default MessageInput;