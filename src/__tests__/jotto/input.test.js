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
        test("renders component without error", () => {});
        test("does not renders input box", () => {});    
        test("does not renders submit button", () => {});
    });
    describe("word has not been guessed", () => {
        test("renders component without error", () => {});
        test("renders input box", () => {});    
        test("renders submit button", () => {}); 
    });
});



describe("update state", () => {
    describe("word has been guessed", () => {
        
    });
});