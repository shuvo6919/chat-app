import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../Hooks/useGetConversations';
import { getRandomEmoji } from '../../Utilities/emoji';

const Conversations = () => {
    const { loading, conversations } = useGetConversations()

    return (
        <div className='flex flex-col py-2 overflow-auto'>

            {
                conversations?.map((conversation, idx) => (
                    <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIdx={idx === conversations.length - 1}></Conversation>
                ))
            }

            {loading ? <span className="loading loading-ring loading-xs"></span> : null}
        </div>
    );
};

export default Conversations;