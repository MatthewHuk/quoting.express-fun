const expect = require("chai").expect;
const {greetings} = require('../samples/async')

describe("GET /", function () {
    it("responds with a greeting", async function () {
        const name = "Mira"
        let greeting = await greetings(name);
        expect(greeting).to.equal(`Hello nice to meet you ${name}`);
    });
});