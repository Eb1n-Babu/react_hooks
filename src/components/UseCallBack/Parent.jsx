import React, {useCallback} from 'react';
import {Child} from "./Child.jsx";

function Parent(props) {

    const [count, setCount] = React.useState(0);

    const handleClick = useCallback(() => {
        console.log('Button clicked!');
    }, []);

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>setCount(count+1)}>+</button>
            <Child x={handleClick} />
        </div>
    );
}

export default Parent;
