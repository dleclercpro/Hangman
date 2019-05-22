import React from 'react';
import PropTypes from 'prop-types';
import './Character.css';

function Character({value, feedback}) {
    return (
        <div className={`character ${feedback}`}>
            {value}
        </div>
    );
}

Character.propTypes = {
    value: PropTypes.string.isRequired,
    feedback: PropTypes.string.isRequired,
};

export default Character;