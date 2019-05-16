import React from 'react';
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
                index={index}
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

export default Keyboard;