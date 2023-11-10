'use client'

import React from 'react'
import links from '../utilities/links'
import Link from 'next/link'

// css in globals.css
function Header() {
    return (
        <header className='w-full font-bold tracking-wide text-sm  z-10 relative'>
            <div className="header-wrapper flex align-middle  justify-around max-w-7xl h-auto mx-auto py-3">
                <div className='flex align-middle'>
                    {/* <img src={logo} alt="" className='w-10' /> */}
                    <Link href={links.root.home}><h1 className='header-logo cursor-pointer text-3xl font-black tracking-wider'>ImaFX</h1></Link>
                    <i className='fa-solid fa-trademark text-xs'></i>
                </div>
                <div className='flex flex-col justify-center'>
                    <ul className='justify-around gap-10 text-black z-10 hidden sm:flex'>
                        <li><Link href={links.root.index} className='font-bold text-xs' >{links.root.home}</Link></li>
                        <li><Link href={links.root.workspace} className='font-bold text-xs'>{links.root.workspace}</Link></li>
                        <li><Link href={links.root.pricing} className='font-bold text-xs'>{links.root.pricing}</Link></li>
                        <li><Link href={links.root.account} className='font-bold text-xs'>{links.root.account}</Link></li>
                        <li><Link href={links.root.contact} className='font-bold text-xs'>{links.root.contact}</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center sm:hidden">
                    <i className='fa-solid fa-bars text-2xl cursor-pointer hover:text-gray-500'></i>
                </div>
            </div>
        </ header >
    )
}

export default Header