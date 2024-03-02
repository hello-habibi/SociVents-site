import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

function Root() {
    return (
        <>

        <Header />
        <Outlet ></Outlet>
        <Footer />
        
        </>
    )
}

export default Root
