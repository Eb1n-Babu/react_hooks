import React, { useState, useEffect } from 'react';

function ChangeColour() {
    const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % rainbow.length);
        }, 1000); // change every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1
                className="centered-heading"
                style={{ backgroundColor: rainbow[index] }}
            >
                Rainbow Colour
            </h1>
        </div>
    );
}

export default ChangeColour;