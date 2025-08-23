import React from 'react';
import {ThemeContext} from "./ThemeContext.jsx";
import ThemedComponent from "./ThemedComponent.jsx";
import AnotherComponent from "./AnotherComponent.jsx";

function Apps(props) {
    return (
        <ThemeContext.Provider value={'red'}>
            <ThemedComponent/>
            <AnotherComponent/>
        </ThemeContext.Provider>
    );
}

export default Apps;