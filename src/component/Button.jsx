import React from 'react';
export default function Button ({change, local}) {

    return (
        <div>
            <button type ='button' onClick = {()=> change(local)}>  click here .. </button>
        </div>
    )

}