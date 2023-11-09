'use client'

import React from 'react'
import links from '../utilities/links'
import Link from 'next/link'

// css in globals.css
function Header() {
    return (
        <header className='w-full font-bold tracking-wide text-sm  z-10'>
            <div className="header-wrapper flex align-middle justify-around max-w-7xl h-auto mx-auto py-3">
                <div className='flex align-middle'>
                    {/* <img src={logo} alt="" className='w-10' /> */}
                    <Link href={links.root.home}><h1 className='cursor-pointer text-3xl font-black tracking-wider'>ImaFX</h1></Link>
                    <i className='fa-solid fa-trademark text-xs'></i>
                </div>
                <div className='vertical-flex'>
                    <ul className='flex justify-around gap-10 '>
                        <li><Link href={links.root.home} >{links.root.home}</Link></li>
                        <li><Link href={links.root.workspace}>{links.root.workspace}</Link></li>
                        <li><Link href={links.root.pricing}>{links.root.pricing}</Link></li>
                        <li><Link href={links.root.account}>{links.root.account}</Link></li>
                        <li><Link href={links.root.contact}>{links.root.contact}</Link></li>
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