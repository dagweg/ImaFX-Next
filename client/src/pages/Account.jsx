import React from 'react'
import '../styles/account.css'

function Account() {

    const accountPageMenuItems = [
        "Dashboard",
        "Profile",
        "Security",
        "Privacy Settings",
        "Notifications",
        "Preferences",
        "Payment",
        "Orders/History",
        "Support/Help Center",
        "Log Out",
        "Delete Account",
        "Terms and Privacy Policy",
    ];

    return (
        <>
            <div className='flex w-full h-full relative'>
                <nav className='side-bar bg-gray-200 relative '>
                    <h1 className='title text-4xl font-black text-gray-1000 py-8 bg-gray-300 text-center'>Account Settings</h1>
                    <ul className='flex flex-col justify-center overflow-scroll h-full'>
                        {accountPageMenuItems.map((menu, index) => (
                            <li className='m-1 py-5 cursor-pointer hover:bg-gray-50 pl-40' key={index}><h1>{menu}</h1></li>
                        ))}
                    </ul>
                </nav>
                <div className='main-bar bg-gray-300 relative'>
                </div>
            </div>
        </>
    )
}

export default Account