import React from 'react'
import { Link } from 'react-router-dom'
import links from '../links'

function Header({ className }) {
    return (
        <header className={`w-full font-bold tracking-wide text-sm  z-10 ${className}`}>
            <div className="header-wrapper flex align-middle justify-around max-w-7xl h-auto mx-auto py-3">
                <div className='flex align-middle'>
                    {/* <img className='logo-image' alt=''></img> */}
                    <h1 className='cursor-pointer text-3xl font-black tracking-wider'>ImaFX</h1>
                    <i className='fa-solid fa-trademark text-xs'></i>
                </div>
                <div className='vertical-flex'>
                    <ul className='flex justify-around gap-10 '>
                        <li><Link to={links.root.home} >Home</Link></li>
                        <li><Link to={links.root.start}>Start</Link></li>
                        <li><Link to={links.root.pricing}>Pricing</Link></li>
                        <li><Link to={links.root.account}>Account</Link></li>
                    </ul>
                </div>
                <dir className='vertical-flex'>
                    <ul>
                        <li><Link to={links.root.login} className='hover:underline transition-all duration-150'>Login / Signup</Link></li>
                    </ul>
                </dir>
            </div>
        </header>
    )
}

export default Header