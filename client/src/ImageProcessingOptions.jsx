import React from 'react'
import Button from './components/Button'
import effects from './utilities/effects'

function ImageProcessingOptions({ imageURL, setImageURL }) {
    return (
        <div className='image-processing-options-wrapper flex flex-col justify-around py-5 px-4 shadow-lg @apply bg-gray-300'>
            {effects.map((text, index) => (
                <Button text={text} imageURL={imageURL} setImageURL={setImageURL} key={index} />
            ))}
        </div>
    )
}

export default ImageProcessingOptions