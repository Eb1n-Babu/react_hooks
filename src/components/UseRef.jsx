import React, {useRef} from 'react';

function UseRef(props) {

    const ref = useRef(null);

    const focousInput = () =>{
        ref.current.focus();
    }
    return (
        <div>
            <input type='text' placeholder="enter"/> <br/>
            <input ref={ref} type='text' placeholder="type here"/>
            <button onClick={focousInput}>focous</button>
        </div>
    );
}

export default UseRef;