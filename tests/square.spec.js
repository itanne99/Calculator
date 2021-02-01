const application = require("../js/square");

describe("Square Function", () => {
    test("it should take 'a' argument and return the value to the power of 2", () => {

        expect(application(6)).toEqual(36);
    });
});