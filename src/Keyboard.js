import React from 'react';
import Key from './Key';
import './Keyboard.css';

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="keyboard">
            {
                this.props.alphabet.map((value, index) => (
                    <Key value={value}
                        key={index}
                        index={index}
                        onClick={this.props.onKeyClick}
                    />
                ))
            }
            </div>
        )
    }
}

export default Keyboard;