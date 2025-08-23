import React, {memo} from 'react';

export const Child = memo((({x})=>{
    console.log('Child Rendering...');
    return <button onClick={x}>Log</button>
}))
