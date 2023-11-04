import React, { useState, useRef } from 'react'
import '../styles/workspace.css'
import imageProcessingEffects from '../utilities/effects';

function Workspace() {

    const [imageURL, setImageURL] = useState('');
    const fileInput = useRef()

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImageURL(URL.createObjectURL(file))
        }
    }

    const addImageClicked = () => {
        fileInput.current.click()
    }

    return (
        <section className='relative flex flex-col justify-center h-screen'>
            <div className='absolute top-0 right-0 left-0 bottom-0 flex '>
                <section className='modifier-pane overflow-y-scroll'>
                    <h1>Modifiers</h1>
                    <div className='relative'>
                        {imageProcessingEffects.map((obj, i) => (

                            <div>
                                <div key={i} className='dropdown-menu'>
                                    <label htmlFor="" key={i}>{obj.category}</label>
                                    <i className='fa-solid fa-angle-down' key={i}></i>
                                </div>
                                <div className='ml-3'>
                                    {obj.effects.map((effect, j) => (
                                        <div key={j} className='dropdown-menu-items'>
                                            <label htmlFor="" key={j}>{effect}</label>
                                            <i className='fa-solid ' key={j}></i>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section >
                <section className='canvas'>
                    <div className='canvas-tab'>
                        <label>Canvas</label>
                        {imageURL !== '' && <i className='fa-solid fa-trash' onClick={() => setImageURL('')}></i>}
                    </div>
                    <div className='canvas-main'>
                        {
                            imageURL !== '' ?
                                <img src={`${imageURL}`} alt='' className='image'></img>
                                :
                                <div className='add-image-wrapper' onClick={addImageClicked}>
                                    <input type="file" ref={fileInput} onChange={handleFileChange} hidden />
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clipRule="evenodd" fillRule="evenodd"></path> </g></svg>
                                    </div>
                                    <div className="text">
                                        <span>Click to upload image</span>
                                    </div>
                                </div>
                        }


                    </div>
                </section>
            </div >
        </section >
    )
}

export default Workspace