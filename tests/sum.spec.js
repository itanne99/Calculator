const application = require("../js/sum");

describe("Addition Function", () => {
    test("it should add agrument a & b", () => {

        expect(application(1, 2)).toEqual(3);
    });
});
