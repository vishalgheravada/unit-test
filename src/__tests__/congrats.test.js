import React from "react";
import {shallow} from "enzyme";
import CongratsComponent from "../jotto/congrats";
import {findByTestAttr} from "./utils";

/**
 * Factory function to create a shallowrapper for the compoenent
 * @function init
 * @param {object} state 
 * @param {object} props 
 * @returns ShallowWrapper
 */
const init = (props = {}, state = {}) => {
    return shallow(<CongratsComponent {...props} />);
};

describe("Jotto App", () => {    
    test("renders Component without error ", () => {
        const wrapper = init();
        const congratsComponent = findByTestAttr(wrapper, "congratsComponent");
        expect(congratsComponent.length).toBe(1);
    });

    test("Renders no text when the props is false", () => {
        const wrapper = init({success: false});
        const congratsComponent = findByTestAttr(wrapper, "congratsComponent");
        expect(congratsComponent.text()).toBe('');
    });

    test("Renders non-empty message when the props is true", () => {
        const wrapper = init({success: true});
        const congratsComponent = findByTestAttr(wrapper, "congratsMessage");
        expect(congratsComponent.text().length).toBeGreaterThan(0);
    });
});