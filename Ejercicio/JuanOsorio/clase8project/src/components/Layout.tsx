import React, { useState, useEffect, } from 'react';
import Header from "./Header";
import Footer from "./Footer";


const Layout = ({ title, children }: any) => {


    const dateNow = () => {
        let year = new Date();
        return year.getFullYear();
    }

    return (
        <>
            <Header  />

        </>
    )
}

export default Layout;