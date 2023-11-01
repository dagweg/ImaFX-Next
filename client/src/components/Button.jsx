import React from 'react'
import "../styles/button.css"
import processImage from '../utilities/processImage'

function Button({ text, imageURL, setImageURL }) {
    return (
        <>  
            <button onClick={() => processImage(imageURL, setImageURL)}>
                {text}
            </button>
        </>
    )
}

export default Button