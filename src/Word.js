import React from 'react';
import PropTypes from 'prop-types';
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

Word.propTypes = {
    value: PropTypes.string.isRequired,
    feedback: PropTypes.string.isRequired,
    getFeedbackCharacter: PropTypes.func.isRequired,
};

export default Word;
