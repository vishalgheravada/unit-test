import React from "react";
import { findByTestAttr, checkProps } from "./utils";
import { shallow } from "enzyme";
import GuessedWords from "../jotto/guessedwords";

const defaultProps = {
    guessedWords: [
        {guessedWord: "Chirag", letterCount: 3},
        {guessedWord: "Hitesh", letterCount: 1}
    ]
};

const init = (props = {}) => {
    const setUpProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setUpProps} />);
};

test("does not throw warning with a expected props", () => {
    checkProps(GuessedWords, defaultProps);
});

describe("If there are no words", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = init({guessedWords: []});
    });
    test("Renders without an error", () => {        
        const guessedWords = findByTestAttr(wrapper, "guessedComponent");
        expect(guessedWords.length).toBe(1);
    });

    test("Renders instrction to guess a word", () => {
        const instrction = findByTestAttr(wrapper, "instrction");
        expect(instrction.text().length).toBeGreaterThan(0);
    });
});

describe("If there are words", () => {        
    let wrapper;
    beforeEach(() => {
        wrapper = init(defaultProps);
    });
    test("Renders without an error", () => {
        const guessedWords = findByTestAttr(wrapper, "guessedComponent");
        expect(guessedWords.length).toBe(1);
    });

    test("Renders guessed words", () => {
        const instrction = findByTestAttr(wrapper, "wordListing");
        expect(instrction.length).toBe(1);
    });
});