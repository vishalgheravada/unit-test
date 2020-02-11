/**
 * Return Node(s) with the given attribute
 * @function findByTestAttr
 * @param {*} wrapper 
 * @param {*} value 
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[dataTest='${value}']`);
};