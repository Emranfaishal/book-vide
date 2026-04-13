import React from 'react';
import Navbar from '../compnents/shared/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../compnents/shared/footer/Footer';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;