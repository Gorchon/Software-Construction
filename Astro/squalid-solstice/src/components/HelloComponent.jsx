import React, { useState, useEffect } from 'react';

function HelloComponent() {
    const [counterpro, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the counter every second
            setCounter(prevCounter => prevCounter + 1);
        }, 1000); // Interval set to 1000 milliseconds (1 second)

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array to run effect only once after the initial render

    return (
        <div>
            <h1>hello this is the counter {counterpro}</h1>
        </div>
    );
}

export default HelloComponent;
