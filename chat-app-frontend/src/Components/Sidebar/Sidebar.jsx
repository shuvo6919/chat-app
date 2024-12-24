import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import { UseAppContext } from '../../Context/AppContextProvider';

const Sidebar = () => {
    const { showMenu, setShowMenu } = UseAppContext()

    return (
        <div className={`${showMenu ? "" : "hidden md:flex"}  max-w-[90vw] border-r border-slate-500 p-4 flex flex-col`}>
            <SearchInput></SearchInput>
            <div className='divider px-3'></div>
            <Conversations showMenu={showMenu}></Conversations>
            <LogoutButton></LogoutButton>
        </div>
    );
};

export default Sidebar;