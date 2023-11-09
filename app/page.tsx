'use client'

import React, { useEffect, useState } from 'react';
import './index.css';

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
            <div className="">
                <div className="card" onClick={handleTextClick}>
                    {text.map((char, index) => (
                        <h1 key={index} style={{ fontFamily: "Roboto" }} className="pointer-events-none">
                            {char === ' ' ? '\u00a0' : char}
                        </h1>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Index;
