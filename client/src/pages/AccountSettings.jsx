import React from 'react'
import '../styles/account.css'
import { Outlet, useNavigate } from 'react-router-dom';
import links from '../links';

function AccountSettings() {

    const navigate = useNavigate()

    const accountPageMenuItems = Object.keys(links.account).map(key => links.account[key])

    return (
        <>
            <div className='flex relative my-0'> {/**className='flex w-full h-full relative' */}
                <nav className='side-bar relative h-full'>
                    <h1 className='title text-4xl font-black text-gray-1000 py-8 text-center'>Account Settings</h1>
                    <ul className='flex flex-col justify-center overflow-y-scroll h-full'>

                        {accountPageMenuItems.map((menuItem, index) => (
                            <li className='menu-item' key={index} onClick={() => navigate(menuItem)}>
                                <h1>{menuItem}</h1>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='main-bar-wrapper'>
                    <div className='main-bar'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountSettings