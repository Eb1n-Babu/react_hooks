import React, {useEffect} from 'react';

function UseEffect() {

    const [count, setCount] = React.useState(0);

    useEffect(() => {
        console.log("componentDidMount");
        return () => {
            console.log("componentWillUnmount");
        }
    },[]);

    return (
        <div>
            <h1>count {count}</h1>
            <button onClick={() => setCount(count+1)}>CLICK</button>
        </div>
    );
}

export default UseEffect;