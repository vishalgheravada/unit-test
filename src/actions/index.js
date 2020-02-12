export const actionType = {
    CORRECT_GUESS: "CORRECT_GUESS",
};

export const correctGuess = () => {
    return {type: actionType.CORRECT_GUESS};
};