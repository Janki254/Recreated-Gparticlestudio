import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Components/Navbar/Navbar';

const RootLayout = () => {

    return (
        <React.Fragment>
            <div className='flex flex-col overflow-hidden min-h-screen'>
                <Navbar />
                <Outlet />
            </div>
        </React.Fragment>
    );
};

export default RootLayout;
