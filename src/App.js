import React from 'react';
import Word from './Word';
import Keyboard from './Keyboard';
import RandomWords from 'random-words';
import './App.css';

const KEYBOARD = {
    top: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    middle: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    bottom: ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
};

const KEYS = [...KEYBOARD.top, ...KEYBOARD.middle, ...KEYBOARD.bottom];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            word: this.getWord(),
            matchedCharacters: [],
            clickedKeys: [],
        };
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown, false);
    }

    reset = () => {
        this.setState({
            word: this.getWord(),
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

    handleKeyDown = (e) => {
        
        // Get key pressed
        const key = e.key.toUpperCase();

        // Reset
        if (key === " ") {
            this.reset();
        }

        // If key within available within keyboard, handle as click
        if (KEYS.includes(key)) {
            this.handleKeyClick(key);
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

    wasCharacterFound = (c) => {
        return this.state.matchedCharacters.includes(c);
    }

    getFeedbackWord() {
        return this.state.word.toLowerCase().split("").every(this.wasCharacterFound) ? 'done' : 'undone';
    }

    getWord() {
        return RandomWords({
            exactly: 1,
            maxLength: 14,
        })[0];
    }

    render() {
        return (
            <React.Fragment>
                <Word value={this.state.word} feedback={this.getFeedbackWord()} getFeedbackCharacter={this.getFeedbackCharacter} />
                <Keyboard keys={KEYBOARD} reset={this.reset} getFeedbackKey={this.getFeedbackKey} onKeyClick={this.handleKeyClick}/>
            </React.Fragment>
        );
    }
}

export default App;
