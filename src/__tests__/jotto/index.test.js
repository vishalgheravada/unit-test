import {getLetterMatchCount} from "../../jotto/helpers/index";
describe("getLetterMatchCount", () => {
    const secretWord = "party";

    test("returns the correct count when there are no matching letters", () => {
        const count = getLetterMatchCount("bones", secretWord);
        expect(count).toBe(0);
    });

    test("returns the correct numbers when there are 3 matching letters", () => {
        const count = getLetterMatchCount("train", secretWord);
        expect(count).toBe(3);
    });

    test("returns the correct numbers when there are duplicate letters in the guess", () => {
        const count = getLetterMatchCount("parka", secretWord);
        expect(count).toBe(3);
    });
});