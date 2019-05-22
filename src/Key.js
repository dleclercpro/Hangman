import React from 'react';
import PropTypes from 'prop-types';
import './Key.css';

function Key({value, feedback, onClick}) {
    return (
        <div className={`key ${feedback}`} onClick={() => onClick(value)}>
            {value}
        </div>
    );
}

Key.propTypes = {
    value: PropTypes.string.isRequired,
    feedback: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Key;