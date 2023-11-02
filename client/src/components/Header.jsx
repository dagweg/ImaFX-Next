import React from 'react'

function Header() {
    return (
        <header className='w-full font-bold tracking-wide text-sm fixed z-10'>
            <div className="header-wrapper flex align-middle justify-around max-w-7xl h-full mx-auto py-3">
                <div className='flex align-middle'>
                    {/* <img className='logo-image' alt=''></img> */}
                    <h1 className='cursor-pointer text-3xl font-black tracking-wider'>ImaFX</h1>
                    <i className='fa-solid fa-trademark text-xs'></i>
                </div>
                <div className='vertical-flex'>
                    <ul className='flex justify-around gap-10 '>
                        <li><a href='/' >Home</a></li>
                        <li><a href='/Start'>Start</a></li>
                        <li><a href='/Pricing'>Pricing</a></li>
                        <li><a href='/Account'>Account</a></li>
                    </ul>
                </div>
                <dir className='vertical-flex'>
                    <ul>
                        <li><a href='/Login' className='hover:underline transition-all duration-150'>Login</a></li>
                    </ul>
                </dir>
            </div>
        </header>
    )
}

export default Header