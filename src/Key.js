import React from 'react';
import './Key.css';

function Key({value, feedback, onClick}) {
    return (
        <div className={`key ${feedback}`} onClick={() => onClick(value)}>
            {value}
        </div>
    );
}

export default Key;