import {getLetterMatchCount} from "../jotto/helpers/index"
export const actionType = {
    CORRECT_GUESS: "CORRECT_GUESS",
    GUESS_WORD: "GUESS_WORD",
};

export const guessWord = guessedWord => {
    return (dispatch, getState) => {        
        const secretWord = getState().secretWord;
        const letterCount = getLetterMatchCount(guessedWord, secretWord);
        dispatch({
            type: actionType.GUESS_WORD,
            payload: {guessedWord, letterCount},
        });

        if(secretWord === guessedWord) {
            dispatch({
                type: actionType.CORRECT_GUESS,            
            });
        }
    }
};