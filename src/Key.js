import React from 'react';
import './Key.css';

function Key({value, onClick}) {
    return (
        <div className="key" onClick={() => onClick(value)}>
            {value}
        </div>
    );
}

export default Key;