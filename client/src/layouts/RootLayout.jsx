import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <>
            <Header />
            <div className='h-screen bg-gradient-to-r from-gray-50 to-gray-100 pt-16'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default RootLayout