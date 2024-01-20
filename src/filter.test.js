import { filter, isNegative, isLessThanMinusFiveHundred, isUpperCase } from "./filter.js";

test("Negative", () => {
    expect(filter([10, 50, -20, -10, 100], isNegative)).toEqual([-20, -10]);
});

test("Less than -500", () => {
    expect(filter([10, 50, -20, -10, 100], isLessThanMinusFiveHundred)).toEqual([]);
});

test("String", () => {
    expect(filter("abcDeFgHI".split(""), isUpperCase)).toEqual(["D","F","H","I"]);
});