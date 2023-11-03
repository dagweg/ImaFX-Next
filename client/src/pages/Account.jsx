import React from 'react'
import '../styles/account.css'
import { Outlet, useNavigate } from 'react-router-dom';
import links from '../links';

function Account() {

    const navigate = useNavigate()

    const accountPageMenuItems = Object.keys(links.account).map(key => links.account[key])

    return (
        <>
            <div className='flex relative my-0'> {/**className='flex w-full h-full relative' */}
                <nav className='side-bar bg-gray-200 relative h-full'>
                    <h1 className='title text-4xl font-black text-gray-1000 py-8 bg-gray-300 text-center'>Account Settings</h1>
                    <ul className='flex flex-col justify-center overflow-y-scroll h-full'>

                        {accountPageMenuItems.map((menuItem, index) => (
                            <li className='m-1 py-5 cursor-pointer hover:bg-gray-50 pl-40' key={index} onClick={() => navigate(menuItem)}>
                                <h1>{menuItem}</h1>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='main-bar bg-gray-100 relative rounded-lg'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Account