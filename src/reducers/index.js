import {combineReducers} from "redux";
import success from "./successReducers";
import guessedWords from "./guessedwords-reducers";
import secretWord from "./secretWordReducers";


export default combineReducers({
    success, guessedWords, secretWord
});
