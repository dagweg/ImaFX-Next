import React, { useState, useEffect } from 'react';
import '../styles/fileOutput.css';


function FileOutput({ imageURL }) {
    return (
        <>
            <div className='file-output-wrapper flex justify-center align-middle p-2 m-2 max-w-lg'>
                <img src={imageURL} alt='' className='max-w-full max-h-full' />
            </div>
        </>
    );
}

export default FileOutput;
