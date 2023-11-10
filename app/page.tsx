'use client'

import React, { useEffect, useState } from 'react';
import './index.css';
import Image from 'next/image';
import ImSky from './assets/sky-wow.webp'

function Index() {
    const [text, setText] = useState<string[]>([]);
    const [textClicked, setTextClicked] = useState<Boolean>(false);
    const [isTyping, setIsTyping] = useState<Boolean>(false);
    const toWrite: String[] = ["WWelcome to ImaFx", "Where your pictures come to life!", "Transforming Pixels into Dreams!"];

    useEffect(() => {
        let i = 0;
        let j = 0;
        let writeDelay = 150;
        let eraseDelay = 35;

        function typewriter(i, j) {
            setIsTyping(true);
            if (i < toWrite.length) {
                if (j < toWrite[i].length) {
                    if (i === 0 && j === 0) {
                        setText((prev) => prev.concat(toWrite[i][j].split('').slice(1)));
                    } else {
                        setText((prev) => [...prev, toWrite[i][j]]);
                    }
                    j += 1;
                    setTimeout(() => typewriter(i, j), writeDelay);
                } else {
                    // Start erasing when the typing is done
                    if (i !== toWrite.length - 1) {
                        setTimeout(() => typewriterErase(i, j - 1), 1500);
                    } else {
                        setIsTyping(false);
                    }
                }
            }
        }

        function typewriterErase(i, j) {
            setIsTyping(true);
            if (i < toWrite.length) {
                if (j >= 0) {
                    setText((prev) => prev.slice(0, j));
                    j -= 1;
                    setTimeout(() => typewriterErase(i, j), eraseDelay);
                } else {
                    i += 1;
                    typewriter(i, j);
                }
            }
        }

        if (!isTyping) {
            setText([]);
            typewriter(i, j);
        }
    }, [textClicked]);

    const handleTextClick = () => {
        if (!isTyping) {
            setTextClicked(true);
        }
    };

    return (
        <>
            <>
                <section className='section-1 relative h-screen grid grid-cols-5 grid-rows-1'>
                    <div className='images-wrapper shadow-sm'>
                        <div className='images '>
                            <div className="orig"></div>
                            <div className="gray"></div>
                            <div className="curves"></div>
                        </div>
                    </div>
                    <div className='heading relative col-span-3 flex flex-col justify-center items-center pl-10'>
                        <h1 className='font-bold text-black'>Welcome to <strong className='font-black text-pink-600'>ImaFX</strong></h1>
                        <p className='font-light'>Redefining image processing</p>
                    </div>
                </section>
                <section className='section-2 relative h-screen bg-gray-100 grid grid-cols-5'>
                    <div className='heading relative w-full h-full flex flex-col justify-center items-center text-gray-700 px-32 col-span-3'>
                        <h1 className='font-bold'>Where your pictures come to <strong className='font-black'>Life!</strong></h1>
                        <p className='font-light'>Utilizing the power of AI to revolutionize how images look</p>
                    </div>
                    <div className='decorator-wrapper col-span-2 w-full h-full'>
                        <div className='right-box'></div>
                    </div>
                </section>
                <section className='section-3 relative h-screen bg-transparent grid grid-cols-5'>
                    <div className='decorator-wrapper col-span-2 w-full h-full'>
                        <div className='right-box'></div>
                    </div>
                    <div className='heading relative w-full h-full flex flex-col justify-center items-center  px-32  text-white col-span-3'>
                        <h1 className='font-black'>Transforming Pixels into<strong className='font-black  '> Dreams!</strong></h1>
                    </div>
                </section>
            </>
        </>
    );
}

{/* <div className="">
                <div className="card" onClick={handleTextClick}>
                    {text.map((char, index) => (
                        <h1 key={index} style={{ fontFamily: "Roboto" }} className="pointer-events-none">
                            {char === ' ' ? '\u00a0' : char}
                        </h1>
                    ))}
                </div>
            </div> */}

export default Index;
