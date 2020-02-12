export const getLetterMatchCount = (guessedWord, SecretWord) => {
    const guessedWordSet = new Set(guessedWord.split(""));
    const SecretWordSet = new Set(SecretWord.split(""));
    return [...SecretWordSet].filter(i => guessedWordSet.has(i)).length;
};