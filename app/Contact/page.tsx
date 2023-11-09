import React from 'react'
import './contact.css'


function Contact() {
    return (
        <>
            <div className='w-full  p-10'>
                <div className='bg-opacity-25 w-full  rounded-xl shadow-xl flex '>
                    <div className='description p-8 h-full w-full  bg-opacity-30 '>
                        <div className='mx-auto h-full max-w-6xl flex flex-col justify-center items-center'>
                            {/* <img src={logo} alt='' className='max-w-xs'></img> */}
                            <h1 className='text-8xl font-black tracking-wider py-10'>ImaFX<span className='text-sm'>&trade;</span></h1>
                            <h1 className='text-xl text-black '>
                                <span className='font-bold heading'>Your Go-To Free Image Editing Software</span>
                                <span className='mr-10'></span>Welcome to ImaFX, your one-stop destination for effortless image editing! Our user-friendly software is available for free right here on our website. Whether you're a seasoned pro or just looking to enhance your photos with ease, ImaFX has you covered.

                                With ImaFX, you can effortlessly transform your images and bring out their full potential. Choose from a wide array of stunning effects and editing tools to make your photos look absolutely gorgeous and exactly how you envision them.
                                <br />
                                <br />
                            </h1>
                            <h1 className='text-xl text-black '>
                                <span className='font-bold heading'>Exciting Future Updates: </span>
                                <span className='mr-10'></span>We're constantly working to make ImaFX even better for you. Our future updates will introduce remarkable features that will take your image editing experience to the next level. Stay tuned for a world of possibilities as we continue to enhance this website!

                                <br />
                                <br />
                            </h1>
                            <h1 className='text-xl text-black '>
                                <span className='font-bold heading'>Contact and Info: </span>
                                <span className='mr-10'></span>If you have any questions, feedback, or need assistance, please don't hesitate to get in touch with us. We're here to help you make the most of your image editing journey.

                                Thank you for choosing ImaFX for all your image editing needs. Start creating stunning images today, and let your creativity shine!
                            </h1>

                            <div className='contact-us-card grid grid-cols-2 w-full p-10 bg-gray-50 my-10 bg-opacity-25 rounded-lg text-gray-700 shadow-2xl'>
                                <div className='subscribe-newsletter flex flex-col justify-center p-4 border  border-black border-t-0 border-l-0 border-b-0 border-r-2'>
                                    <h1 className='font-black text-xl'>Subscribe to our newsletter</h1>
                                    <div className='mt-3'>
                                        <label htmlFor="">Email</label>
                                        <input type="email" name="" id="" className='p-4 w-full rounded-sm' />
                                    </div>
                                    <div className='mt-3'>
                                        <button className='subscribe' >Subscribe</button>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <h1 className='font-black text-xl text-center'>Contact us</h1>
                                    <div className='flex flex-col items-center py-10'>
                                        <p><strong>Email:</strong> imafx.io@gmail.com</p>
                                        <p><strong>Address:</strong> Ethiopia, Addis Ababa, 4kilo</p>
                                    </div>
                                    <ul className='flex gap-6 items-center justify-center text-5xl py-10'>
                                        <li><a rel='noreferrer' href="https://www.instagram.com" target='_blank'><img src="" alt="" className='social-media-links transform hover:scale-110 transition-transform ease-in-out duration-150 fa-brands fa-instagram hover:text-red-600' /></a></li>
                                        <li><a rel='noreferrer' href="https://www.linkedin.com" target='_blank'><img src="" alt="" className='social-media-links transform hover:scale-110 transition-transform ease-in-out duration-150 fa-brands fa-linkedin hover:text-blue-500' /></a></li>
                                        <li><a rel='noreferrer' href="https://www.github.com" target='_blank'><img src="" alt="" className='social-media-links transform hover:scale-110 transition-transform ease-in-out duration-150 fa-brands fa-github hover:text-black' /></a></li>
                                        <li><a rel='noreferrer' href="https://www.twitter.com" target='_blank'><img src="" alt="" className='social-media-links transform hover:scale-110 transition-transform ease-in-out duration-150 fa-brands fa-x-twitter  hover:text-black' /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Contact