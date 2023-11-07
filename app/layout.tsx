'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation';

function RootLayout({ children }) {
    const router = useRouter();

    return (
        <>
            <div className='relative'>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default RootLayout