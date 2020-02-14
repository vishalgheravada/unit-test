import {actionType} from "../../actions/index";
import successReducers from "../../reducers/successReducers";

test("returs default initial state of 'false' when no action is passed", () => {
    const newState = successReducers(undefined, {});
    expect(newState).toBe(false);
});

test("returs default initial state of 'true' upon reciveing an action type of CORRECT_GUESS", () => {
    const newState = successReducers(undefined, {type: actionType.CORRECT_GUESS});
    expect(newState).toBe(false);
});