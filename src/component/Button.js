import React from 'react';

function Button (props) {

    const {handelClick, local} = props

    return (
        <button type='button' onClick={()=> handelClick(local)}> Click Me...</button>
    )
}

export default Button;