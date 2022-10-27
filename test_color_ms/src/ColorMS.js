import React, { useState, useEffect } from 'react';
import axios from 'axios';

// make sure to run npm install to get packages once cloned on your machine

const ColorMS = () => {
    // create a variable, make GET request and store the data into the variable
    const [hex, setHex] = useState({});
    const fetchHex = async () => {
        const res = await axios.get('http://localhost:4000/')

        setHex(res.data)
    };
    // displaying variable immediately via useEffect()
    useEffect(() => {
        fetchHex();
    });

    // incrementing key for .map
    let keyi = 0
    // rendering the array of hex
    const renderedHex = Object.values(hex).map((hexcode) => {
        return <div className='bg-white flexpt-20 w-full h-8' key={keyi++}>
            <div>
                <h3 className='text-black'>{hexcode}</h3>
            </div>
        </div>
    });

    return (
        <div>
            {renderedHex}
        </div>
    )
}

export default ColorMS;