import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeContext.jsx";

function ThemedComponent(props) {

    const theme = useContext(ThemeContext);
    return (
        <div>
            <h1>Themed Component : {theme}</h1>
        </div>
    );
}

export default ThemedComponent;