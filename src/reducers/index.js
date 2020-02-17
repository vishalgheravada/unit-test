import {combineReducers} from "redux";
import success from "./successReducers";
import guessedwordsReducers from "./guessedwords-reducers";


export default combineReducers({
    success, guessedwordsReducers,
});
