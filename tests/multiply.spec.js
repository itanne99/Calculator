const application = require("../js/multiply");

describe("Multiplication Function", () => {
    test("it should multiply agrument a & b", () => {

        expect(application(6, 2)).toEqual(12);
    });
});