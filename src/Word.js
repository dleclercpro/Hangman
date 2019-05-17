import React from 'react';
import Character from './Character';
import './Word.css';

class Word extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchedCharacters: [],
        }
    }

    render() {
        return (
            <div className={`word ${this.props.feedback}`}>
                {
                    this.props.value.split("").map((value, index) => (
                        <Character value={value}
                            key={index}
                            feedback={this.props.getFeedbackCharacter(value)}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Word;
