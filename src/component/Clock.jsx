import React from 'react';

/**
 * This is a simple clock component 
 * resived props and change the clock vertion 
 * 
 */

export default function Clock ({local}) {
    return (
        <div>
            <h2> This is clock component {new Date().toLocaleTimeString(local)}</h2>
        </div>
    )
}