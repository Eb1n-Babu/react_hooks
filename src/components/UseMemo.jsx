import React, {useMemo} from 'react';

function UseMemo(props) {

    const [count, setCount] = React.useState(0);

    const double = useMemo(()=>{
        console.log('double calculating ......');
        return count*2;
    },[count]);

    return (
        <div>
            <p>{count}</p>
            <p>Double : {double}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
}

export default UseMemo;