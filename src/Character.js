import React from 'react';
import './Character.css';

function Character({value, feedback}) {
    return (
        <div className={`character ${feedback}`}>
            {value}
        </div>
    );
}

export default Character;