import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducers from "../../reducers/index";
/**
 * Return Node(s) with the given attribute
 * @function findByTestAttr
 * @param {*} wrapper 
 * @param {*} value 
 * @return {*} ShallowWrapper
 */
export const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[dataTest='${value}']`);
};

export const checkProps = (Component, expectedProps) => {
    const error = checkPropTypes(Component.propTypes, expectedProps, "props", Component.name);
    expect(error).toBeUndefined();
};

export const storeFactory = (initialState) => {
    return createStore(rootReducers, initialState);
};