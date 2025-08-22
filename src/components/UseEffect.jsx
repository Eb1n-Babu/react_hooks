import React, {useEffect} from 'react';

function UseEffect(props) {

    const [count, setCount] = React.useState({num1:0, num2:0});

    console.log("simple counter",count.num1)

    useEffect(() => {
        console.log("use effect counter",count.num2)
    },[count.num2])

    return (
        <div>
            <h1>{count.num1}</h1>
            <h1>{count.num2}</h1>
            <button onClick={() => setCount({...count,num1: count.num1+1})}>simple button</button>
            <button onClick={() => setCount({...count,num2: count.num2+1})}>useEffect button</button>
        </div>
    );
}

export default UseEffect;