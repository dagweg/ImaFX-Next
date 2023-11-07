import React, { useState, useEffect } from 'react';
import { Ripples } from '@uiball/loaders'

function FileOutput({ imageURL, setImageURL }) {

    const [loader, setLoader] = useState({ visible: true })

    const imageLoaded = () => {
        setLoader({ visible: false })
    }

    useEffect(() => {
        if (imageURL === '') setLoader({ visible: true })
    }, [imageURL])


    return (
        <>
            <div className='image-panel-wrapper'>
                {imageURL && <i className='fa-solid fa-close absolute top-0 right-0 -mt-4 -mr-4 scale-150 p-1 transition-all duration-150 rounded-full transform hover:bg-gray-100 cursor-pointer' onClick={() => setImageURL('')}></i>}
                <img src={imageURL} alt='' className='max-w-full max-h-full min-w-full min-h-full object-contain' onLoad={imageLoaded} />
                {loader.visible && (
                    <>
                        <Ripples size={45} speed={2} color="black" />
                        waiting for input
                    </>
                )}
            </div>
        </>
    );
}

export default FileOutput;
