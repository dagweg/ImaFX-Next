import React from 'react'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import "./styles/globals.css"
import "./styles/index.css"
import "./styles/tailwind.css"
import FileUpload from './FileUpload'
import FileOutput from './FileOutput'
import ImageProcessingOptions from './ImageProcessingOptions'

function Index() {

    const [imageURL, setImageURL] = useState('');

    return (
        <>
            <header className='bg-gradient-to-r from-gray-500 to-gray-400 w-full text-white font-bold tracking-wide text-sm'>
                <div className="header-wrapper flex align-middle justify-around max-w-7xl h-full mx-auto py-3">
                    <div className='flex align-middle'>
                        {/* <img className='logo-image'></img> */}
                        <h1 className='cursor-pointer text-white text-3xl font-black tracking-wider font-serif'>ImaFX</h1>
                        <i className='fa-solid fa-trademark text-xs'></i>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <ul className='flex justify-around gap-10'>
                            <li><a href='#' className='hover:underline transition-all duration-150'>Home</a></li>
                            <li><a href='#' className='hover:underline transition-all duration-150'>Options</a></li>
                            <li><a href='#' className='hover:underline transition-all duration-150'>Pricing</a></li>
                            <li><a href='#' className='hover:underline transition-all duration-150'>Account</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <section className='main-section flex flex-col justify-center h-screen'>
                <div className='flex justify-center gap-10 my-10'>
                    <FileUpload setImageURL={setImageURL} />
                    <ImageProcessingOptions imageURL={imageURL} setImageURL={setImageURL} />
                    <FileOutput imageURL={imageURL} setImageURL={setImageURL} />
                </div>
            </section>
            <footer className='bg-gray-300 w-full h-30 bottom-0 align-bottom rounded-sm py-10'>
                <div className="footer-wrapper  max-w-7xl flex  mx-auto h-full justify-around">
                    <div>
                        <ul className='gap-2 flex flex-col  h-full justify-center px-4'>
                            <li><a href='#' className='cursor-pointer'>Home</a></li>
                            <li><a href='#' className='cursor-pointer'>Options</a></li>
                            <li><a href='#' className='cursor-pointer'>Pricing</a></li>
                            <li><a href='#' className='cursor-pointer'>Account</a></li>
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
        </>
    )
}


ReactDOM.render(<Index />, document.getElementById('root'))
