import { divide } from "../src/calculator";

describe("divide", () => {

    //one positive test case
    test("divides two numbers", () => {
        expect(divide(6, 2)).toBe(3);
    });

    // negative test cases 1
    it("throws TypeError if first argument is not a number", () => {
        expect(() => divide("6", 2)).toThrow("Both arguments must be numbers");
    });
    // negative test cases 2
    it("throws TypeError if second argument is not a number", () => {
        expect(() => divide(6, "2")).toThrow("Both arguments must be numbers");
    });
    // negative test cases 3
    it("throws TypeError if first argument is NaN", () => {
        expect(() => divide(NaN, 2)).toThrow("Arguments cannot be NaN");
        expect(() => divide(6, NaN)).toThrow("Arguments cannot be NaN");
    });
    // negative test cases 4
    it("throws Error when dividing by zero", () => {
        expect(() => divide(6, 0)).toThrow("Division by zero is not allowed");
    }); 
});