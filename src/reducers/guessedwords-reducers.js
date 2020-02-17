
import {actionType} from "../actions/index";
export default (state = [], action) => {
    switch(action.type) {
        case actionType.GUESS_WORD:
            return [...state, action.payload];
        default:
            return state;
    }
}