import React from 'react'
import '../../src/styles/account.css'
import { Outlet, useNavigate } from 'react-router-dom';
import links from '../../src/links';

function Account() {

    const navigate = useNavigate()

    const accountPageMenuItems = Object.keys(links.account).map(key => links.account[key])

    return (
        <>
            <div className='flex justify-center relative mx-auto shadow-lg m-3 rounded-lg' style={{ width: '50vw' }}> {/**className='flex w-full h-full relative' */}
                <nav className='relative h-full w-full'>
                    <h1 className='title text-4xl font-black  py-8 text-center'>Account Settings</h1>
                    <ul className='flex flex-col justify-center h-full'>

                        {accountPageMenuItems.map((menuItem, index) => (
                            <li style={{ width: '75%' }} className='m-1 mx-auto py-5 cursor-pointer transition-all duration-75 hover:bg-gray-50 hover:bg-opacity-50 rounded-md text-left p-2' key={index} onClick={() => navigate(menuItem)}>
                                <h1>{menuItem}</h1>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Account