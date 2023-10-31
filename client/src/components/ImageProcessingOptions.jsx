import React from 'react'
import Button from './Button'

function ImageProcessingOptions({ imageURL, setImageURL }) {
    const buttonTypes = [
        "Grayscale",
        "Sepia",
        "Vignette",
        "Modern",
        "Retro",
        "Futuristic"
    ]
    return (
        <div className='image-processing-options-wrapper flex flex-col justify-around py-5 px-4 shadow-lg'>
            {buttonTypes.map(text => (
                <Button text={text} imageURL={imageURL} setImageURL={setImageURL} />
            ))}
        </div>
    )
}

export default ImageProcessingOptions