import React, { useEffect, useState } from 'react';
import '../styles/home.css';

function Home() {
    const [text, setText] = useState([]);
    const [textClicked, setTextClicked] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const toWrite = ["WWelcome to ImaFx", "Where your pictures come to life!", "Transforming Pixels into Dreams!"];

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
                        setText((prev) => [toWrite[i][j].split().splice(1)]);
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

export default Home;
