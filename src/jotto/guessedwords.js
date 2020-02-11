import React, { Component } from "react";
import PropTypes from "prop-types";

export default class GuessedWords extends Component {
    static propTypes = {
        guessedWords: PropTypes.arrayOf(
            PropTypes.shape({
                guessedWord: PropTypes.string.isRequired,
                letterCount: PropTypes.number.isRequired,
            })
        ).isRequired
    };
    render() {
        if(this.props.guessedWords.length > 0) {
            return (
                <div dataTest="guessedComponent">
                    <table>
                        <tbody>
                            {
                                this.props.guessedWords.map(i => (
                                    <tr key={i.guessedWord} dataTest="wordListing">
                                        <td>{i.guessedWord}</td>
                                        <td>{i.letterCount}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>                
            );
        }
        return (
            <div dataTest="guessedComponent">
                <div dataTest="instrction">
                    Enter name to guess the word
                </div>                
            </div>                
        );
    }
}

