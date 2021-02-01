const application = require("../js/subtract");

describe("Subtract Function", () => {
    test("it should subtract agrument a & b", () => {

        expect(application(1, 2)).toEqual(-1);
    });
});