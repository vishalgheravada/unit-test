import React from "react";
import Input from "../../jotto/input";
import {findByTestAttr, storeFactory} from "./utils";
import { shallow } from "enzyme";


const init = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<Input store={store}/>).dive().dive();
};


describe("render", () => {
    describe("word has been guessed", () => {        
        let wrapper;
        beforeEach(() => {
            const initialState = {success: true};
            wrapper = init(initialState);
        });
        test("renders component without error", () => {
            const inputComponent = findByTestAttr(wrapper, "inputComponent");
            expect(inputComponent.length).toBe(1);
        });
        test("does not renders input box", () => {
            const inputBox = findByTestAttr(wrapper, "inputBox");
            expect(inputBox.length).toBe(0);
        });    
        test("does not renders submit button", () => {
            const submitButton = findByTestAttr(wrapper, "submitButton");
            expect(submitButton.length).toBe(0);
        });
    });
    describe("word has not been guessed", () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success: false};
            wrapper = init(initialState);
        });
        test("renders component without error", () => {
            const component = findByTestAttr(wrapper, "inputComponent");
            expect(component.length).toBe(1);

        });
        test("renders input box", () => {
            const inputBox = findByTestAttr(wrapper, "inputBox");
            expect(inputBox.length).toBe(1);
        });    
        test("renders submit button", () => {
            const submitButton = findByTestAttr(wrapper, "submitButton");
            expect(submitButton.length).toBe(1);
        });     
    });
});



describe("update state", () => {
    describe("word has been guessed", () => {
        
    });
});