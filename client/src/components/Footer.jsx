import React from 'react'

function Footer() {
    return (
        <footer className='relative h-auto'>
            <div className="max-w-7xl flex mx-auto justify-around m-auto">
                <div>
                    <ul className=' flex gap-4 h-full align-middle p-4 text-sm'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/start">Start</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                        <li><a href="/account">Account</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex gap-4 h-full align-middle p-4'>
                        <li><a rel='noreferrer' href="https://www.instagram.com" target='_blank'><img src="" alt="" className='transform hover:scale-110 transition-transform ease-in-out duration-150 fa-brands fa-instagram text-2xl' /></a></li>
                        <li><a rel='noreferrer' href="https://www.linkedin.com" target='_blank'><img src="" alt="" className='transform hover:scale-110 transition-transform ease-in-out duration-150 fa-brands fa-linkedin text-2xl' /></a></li>
                        <li><a rel='noreferrer' href="https://www.github.com" target='_blank'><img src="" alt="" className='transform hover:scale-110 transition-transform ease-in-out duration-150 fa-brands fa-github text-2xl' /></a></li>
                        <li><a rel='noreferrer' href="https://www.twitter.com" target='_blank'><img src="" alt="" className='transform hover:scale-110 transition-transform ease-in-out duration-150 fa-brands fa-twitter text-2xl' /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer