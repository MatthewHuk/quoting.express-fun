const expect = require("chai").expect;
const {greetings} = require('../samples/async')

describe("GET /", function () {
    it("responds with a greeting", async function () {
        const name = "Mira"
        let greeting = await greetings(name);
        expect(greeting).to.eql("Hello nice to meet you Mira");
    });
});