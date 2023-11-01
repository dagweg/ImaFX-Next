import React from 'react'
import { SansSerif } from '../assets/fonts'

function Home() {
    return (
        <>
            <div className=''>
                <div className='flex flex-col justify-center align-middle h-96'>
                    <h1 className='text-6xl text-center' style={{ fontFamily: SansSerif }}>Welcome to Imaf(x)</h1>
                </div>
            </div>
        </>
    )
}

export default Home