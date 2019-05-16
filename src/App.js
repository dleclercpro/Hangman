import React from 'react';
import Word from './Word';
import Keyboard from './Keyboard';
import './App.css';

const LATIN_ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            word: "Testing",
            matchedCharacters: [],
        };
    }

    handleKeyClick = (c) => {

        // Lower case character
        c = c.toLowerCase();

        // Lower case word
        const word = this.state.word.toLowerCase();

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

    render() {
        return (
            <React.Fragment>
                <Word value={this.state.word} getFeedbackCharacter={this.getFeedbackCharacter} />
                <Keyboard alphabet={LATIN_ALPHABET} onKeyClick={this.handleKeyClick} />
            </React.Fragment>
        );
    }
}

export default App;