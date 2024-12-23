import React from 'react';
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../Hooks/useLogout';


const LogoutButton = () => {
    const { logout, loading } = useLogout()
    return (
        <div className='mt-auto'>
            {loading ? (
                <span className="loading loading-ring loading-md"></span>

            )
                : (<BiLogOut onClick={logout} className='w-6 h-6 text-white cursor-pointer' />
                )}
        </div>
    );
};

export default LogoutButton;