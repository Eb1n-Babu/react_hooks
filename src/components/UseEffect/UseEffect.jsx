import React from 'react';

function UseEffect() {

    const [name, setName] = React.useState('');

    setTimeout(() => {
      setName('tRENT');
    }, 5000);

    return (
        <div>{name}</div>
    );
}

export default UseEffect;