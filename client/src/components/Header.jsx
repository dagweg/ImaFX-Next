import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import links from '../links'
import logo from '../assets/logo.png'
// css in globals.css
function Header() {

    const navigate = useNavigate()

    return (
        <header className='w-full font-bold tracking-wide text-sm  z-10'>
            <div className="header-wrapper flex align-middle justify-around max-w-7xl h-auto mx-auto py-3">
                <div className='flex align-middle'>
                    {/* <img src={logo} alt="" className='w-10' /> */}
                    <h1 className='cursor-pointer text-3xl font-black tracking-wider' onClick={() => navigate(links.root.home)}>ImaFX</h1>
                    <i className='fa-solid fa-trademark text-xs'></i>
                </div>
                <div className='vertical-flex'>
                    <ul className='flex justify-around gap-10 '>
                        <li><Link to={links.root.home} >{links.root.home}</Link></li>
                        <li><Link to={links.root.workspace}>{links.root.workspace}</Link></li>
                        <li><Link to={links.root.pricing}>{links.root.pricing}</Link></li>
                        <li><Link to={links.root.account}>{links.root.account}</Link></li>
                        <li><Link to={links.root.contact}>{links.root.contact}</Link></li>
                    </ul>
                </div>
                <dir className='vertical-flex'>
                    <ul>
                        {/* <li><Link to={links.root.login} className='hover:underline transition-all duration-150'>Login / Signup</Link></li> */}
                    </ul>
                </dir>
            </div>
        </ header >
    )
}

export default Header