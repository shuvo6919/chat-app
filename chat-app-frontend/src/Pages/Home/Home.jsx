import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import MessageContainer from '../../Components/Messages/MessageContainer';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { UseAppContext } from '../../Context/AppContextProvider';


const Home = () => {
    const { showMenu, setShowMenu } = UseAppContext()
    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className='flex max-h-[90vh] min-h-[90vh] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <div onClick={handleShowMenu} className='md:hidden cursor-pointer p-3 text-2xl'>
                {
                    showMenu ? <IoMdClose /> : <IoMenu />
                }
            </div>
            <Sidebar></Sidebar>
            <MessageContainer ></MessageContainer>
        </div>
    );
};

export default Home;