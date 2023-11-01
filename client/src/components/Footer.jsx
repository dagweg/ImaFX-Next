import React from 'react'

function Footer() {
    return (
        <footer className='bg-gray-300 w-full h-30 bottom-0 align-bottom rounded-sm py-10'>
            <div className="footer-wrapper  max-w-7xl flex  mx-auto h-full justify-around">
                <div>
                    <ul className='gap-2 flex flex-col  h-full justify-center px-4'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Options</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Account</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex gap-4 h-full align-middle p-10'>
                        <li><a href="#"><img src="" alt="" className='transform hover:scale-110 transition-transform ease-in-out duration-150 fa-brands fa-instagram text-3xl' /></a></li>
                        <li><a href="#"><img src="" alt="" className='transform hover:scale-110 transition-transform ease-in-out duration-150 fa-brands fa-linkedin text-3xl' /></a></li>
                        <li><a href="#"><img src="" alt="" className='transform hover:scale-110 transition-transform ease-in-out duration-150 fa-brands fa-github text-3xl' /></a></li>
                        <li><a href="#"><img src="" alt="" className='transform hover:scale-110 transition-transform ease-in-out duration-150 fa-brands fa-twitter text-3xl' /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer