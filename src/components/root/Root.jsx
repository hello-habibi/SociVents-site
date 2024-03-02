import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

function Root() {
    return (
        <>

        <div className='max-w-7xl mx-auto '>
        <Header  />
        <Outlet ></Outlet>
        <Footer />
        </div>
        
        </>
    )
}

export default Root
