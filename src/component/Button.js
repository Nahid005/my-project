import React from 'react';

function Button (props) {
    
    const {handelClick,} = props;

    return (
        <button onClick={handelClick} > Click Me...</button>
    )
}

export default Button;