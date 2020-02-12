import React, { Component } from "react";
import Congrats from "./congrats";
import Guessedwords from "./guessedwords";

export default class JottoApp extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <Congrats success={true} />
                    <Guessedwords guessedWords={[
                        {guessedWord: "hitesh", letterCount: 1},
                        {guessedWord: "chirag", letterCount: 3},
                    ]} />
                </div>
            </>
        );
    }
}