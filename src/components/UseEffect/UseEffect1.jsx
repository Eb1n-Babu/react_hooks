import React, {useEffect} from 'react';
import UseEffect from "./UseEffect.jsx";

function UseEffect1() {


    useEffect(() => {
        console.log("useEffect1");
        setInterval(() => {
        const Time_ = Date().toLocaleString()
        console.log(Time_)
        },1000)
    },[])

    return (
        <div>
        </div>
    );
}

export default UseEffect1;