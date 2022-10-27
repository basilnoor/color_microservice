import React, { useState, useEffect } from 'react';
import axios from 'axios';

// make sure to run npm install to get packages once cloned on your machine

const ColorMS = () => {
    const [hex, setHex] = useState({});
    const fetchHex = async () => {
        const res = await axios.get('http://localhost:4000/')

        setHex(res.data)
    };

    useEffect(() => {
        fetchHex();
    });

    let keyi = 0

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