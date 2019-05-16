import React from 'react';
import Word from './Word';
import Keyboard from './Keyboard';
import './App.css';

const keys = {
    top: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    middle: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    bottom: ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
};

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            word: "Testing",
            matchedCharacters: [],
            clickedKeys: [],
        };
    }

    reset = () => {
        this.setState({
            word: "Testing",
            matchedCharacters: [],
            clickedKeys: [],
        });
    }

    handleKeyClick = (c) => {

        // Lower case character
        c = c.toLowerCase();

        // Lower case word
        const word = this.state.word.toLowerCase();

        // New key clicked
        if (!this.state.clickedKeys.includes(c)) {
            let newClickedKeys = this.state.clickedKeys;

            newClickedKeys = newClickedKeys.concat(c);

            this.setState({
                clickedKeys: newClickedKeys,
            });
        }

        // New character in word discovered
        if (!this.state.matchedCharacters.includes(c) && word.includes(c)) {
            let newMatchedCharacters = this.state.matchedCharacters;
            
            newMatchedCharacters = newMatchedCharacters.concat(c);

            this.setState({
                matchedCharacters: newMatchedCharacters,
            });
        }
    }

    getFeedbackCharacter = (c) => {

        // Lower case character
        c = c.toLowerCase();

        return this.state.matchedCharacters.includes(c) ? 'visible' : 'hidden';
    }

    getFeedbackKey = (c) => {

        // Lower case character
        c = c.toLowerCase();

        return this.state.clickedKeys.includes(c) ? 'clicked' : 'unclicked';
    }

    render() {
        return (
            <React.Fragment>
                <Word value={this.state.word} getFeedbackCharacter={this.getFeedbackCharacter} />
                <Keyboard keys={keys} reset={this.reset} getFeedbackKey={this.getFeedbackKey} onKeyClick={this.handleKeyClick} />
            </React.Fragment>
        );
    }
}

export default App;