import React from 'react';

function UseState() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default UseState;