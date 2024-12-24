import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = ({ showMenu }) => {
    return (
        <div className={`${showMenu ? "" : "hidden"} max-w-[90vw] border-r border-slate-500 p-4 md:flex flex-col`}>
            <SearchInput></SearchInput>
            <div className='divider px-3'></div>
            <Conversations></Conversations>
            <LogoutButton></LogoutButton>
        </div>
    );
};

export default Sidebar;