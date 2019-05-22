import React from 'react';
import PropTypes from 'prop-types';
import Key from './Key';
import './Keyboard.css';

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    generateKeys(keys) {
        return keys.map((value, index) => (
            <Key value={value}
                key={index}
                feedback={this.props.getFeedbackKey(value)}
                onClick={this.props.onKeyClick}
            />
        ));
    }

    render() {
        return (
            <div className="keyboard">
                <div className="keyRow top">{this.generateKeys(this.props.keys.top)}</div>
                <div className="keyRow middle">{this.generateKeys(this.props.keys.middle)}</div>
                <div className="keyRow bottom">{this.generateKeys(this.props.keys.bottom)}</div>
                <button className="restart" onClick={this.props.reset}>RESET</button>
            </div>
        )
    }
}

Keyboard.propTypes = {
    keys: PropTypes.shape({
        top: PropTypes.arrayOf(PropTypes.string).isRequired,
        middle: PropTypes.arrayOf(PropTypes.string).isRequired,
        bottom: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    reset: PropTypes.func.isRequired,
    getFeedbackKey: PropTypes.func.isRequired,
    onKeyClick: PropTypes.func.isRequired,
};

export default Keyboard;