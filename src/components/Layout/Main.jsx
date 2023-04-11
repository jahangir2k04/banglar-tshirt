import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            {/* <Toaster /> */}
            <ToastContainer />
        </div>
    );
};

export default Main;