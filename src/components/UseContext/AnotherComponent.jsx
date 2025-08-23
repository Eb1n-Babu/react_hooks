import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeContext.jsx";

function AnotherComponent(props) {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <h1>another Component : {theme}</h1>
        </div>
    );
}

export default AnotherComponent;