const application = require("../js/divide");

describe("Division Function", () => {
    test("it should divide agrument a & b", () => {

        expect(application(6, 2)).toEqual(3);
    });
});