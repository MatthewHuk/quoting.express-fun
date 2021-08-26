const request = require('supertest');
const app = require('../app');
const expect = require("chai").expect;

describe("GET /", function () {
    it("responds with a welcome message", async function () {
        const response = await request(app).get("/");

        expect(response.status).to.eql(200);
        expect(response.body.length).to.eql(18);
        expect('Content-Type', /json/);
        expect(response.body).to.eql("Welcome to Quoting");
    });
});