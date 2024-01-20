import { find, isNegative, isLessThanMinusFiveHundred, isUpperCase } from "./find.js";

test("Negative", () => {
    expect(find([10, 50, -20, -10, 100], isNegative)).toEqual(-20);
});

test("Less than -500", () => {
    expect(find([10, 50, -20, -10, 100], isLessThanMinusFiveHundred)).toEqual(undefined);
});

test("Less than -500", () => {
    expect(find("abcDeFgHI".split(""), isUpperCase)).toEqual("D");
});