import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

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
    const createStoreWithMiddlwWare = applyMiddleware(...[ReduxThunk])(createStore);
    return createStoreWithMiddlwWare(rootReducers, initialState);
};