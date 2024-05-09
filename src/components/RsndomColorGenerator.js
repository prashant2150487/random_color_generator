import React, { useEffect, useState } from 'react';

const RandomColorGenerator = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    function handleCreateRandomRGBColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if (typeOfColor === 'hex') {
            handleCreateRandomHexColor();
        } else {
            handleCreateRandomRGBColor();
        }
    },[]);

    useEffect(() => {
        console.log(color);
    }, [color]);

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: color }}>
            <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
            <button onClick={() => {
                if (typeOfColor === 'hex') {
                    handleCreateRandomHexColor();
                } else {
                    handleCreateRandomRGBColor();
                }
            }}>Create Random Color</button>
            <h2>{typeOfColor} {color}</h2>
        </div>
    );
}

export default RandomColorGenerator;
