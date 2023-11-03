import React, { useState } from 'react'
import FileUpload from '../FileUpload'
import FileOutput from '../FileOutput'
import ImageProcessingOptions from '../ImageProcessingOptions'

function Start() {

    const [imageURL, setImageURL] = useState('');

    return (
        <section className='relative flex flex-col justify-center h-screen w-screen'>
            <div className='absolute top-0 right-0 left-0 bottom-0 grid grid-cols-7 grid-rows-1 p-10'>
                <FileUpload setImageURL={setImageURL} />
                <ImageProcessingOptions imageURL={imageURL} setImageURL={setImageURL} />
                <FileOutput imageURL={imageURL} setImageURL={setImageURL} />
            </div>
        </section>
    )
}

export default Start