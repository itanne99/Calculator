const application = require("../js/squareRoot");

describe("Square Root Function", () => {
    test("it should take 'a' argument and return the square root value", () => {

        expect(application(25)).toEqual(5);
    });
});