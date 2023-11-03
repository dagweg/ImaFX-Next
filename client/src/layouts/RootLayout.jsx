import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <>
            <div className='relative'>
                <Header />
                <main className='bg-gradient-to-r'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default RootLayout