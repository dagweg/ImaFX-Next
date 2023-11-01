import React, { useState } from 'react'
import FileUpload from '../FileUpload'
import FileOutput from '../FileOutput'
import ImageProcessingOptions from '../ImageProcessingOptions'

function ImaFX() {

    const [imageURL, setImageURL] = useState('');

    return (
        <section className='main-section flex flex-col justify-center h-screen'>
            <div className='flex justify-center gap-10 my-10'>
                <FileUpload setImageURL={setImageURL} />
                <ImageProcessingOptions imageURL={imageURL} setImageURL={setImageURL} />
                <FileOutput imageURL={imageURL} setImageURL={setImageURL} />
            </div>
        </section>
    )
}

export default ImaFX