import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">Counter: {count}</h1>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default App;