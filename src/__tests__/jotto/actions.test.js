import {correctGuess, actionType} from "../../actions/index";
describe("correctGuess", () => {
    test("returns an action with type 'CORRECT_GUESS'", () => {
        const action = correctGuess();
        expect(action).toEqual({type: actionType.CORRECT_GUESS});
    });
});