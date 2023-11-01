import React from 'react'

function Header() {
    return (
        <header className='bg-gray-500  backdrop-blur-sm w-full text-white font-bold tracking-wide text-sm fixed z-10'>
            <div className="header-wrapper flex align-middle justify-around max-w-7xl h-full mx-auto py-3">
                <div className='flex align-middle'>
                    {/* <img className='logo-image'></img> */}
                    <h1 className='cursor-pointer text-white text-3xl font-black tracking-wider font-serif'>ImaFX</h1>
                    <i className='fa-solid fa-trademark text-xs'></i>
                </div>
                <div className='flex flex-col justify-center'>
                    <ul className='flex justify-around gap-10'>
                        <li><a href='/' className='hover:underline transition-all duration-150'>Home</a></li>
                        <li><a href='/imafx' className='hover:underline transition-all duration-150'>ImaFX</a></li>
                        <li><a href='#' className='hover:underline transition-all duration-150'>Pricing</a></li>
                        <li><a href='#' className='hover:underline transition-all duration-150'>Account</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header