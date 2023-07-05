const server = "http://localhost:3000";
const request = require("supertest");
const fs = require("fs");
const { describe, expect, test } = require("@jest/globals");

// test user creation
describe("User Creation", () => {
  // first let's check that it returns an object
  it("responds with 200 status and object", () => {
    const username = `Paul${Date.now()}`;
    const password = "Paul";
    return request(server)
      .post("/user")
      .send({ username, password })
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  it("password is not the same as the original (should be hashed)", () => {
    const username = `Paul${Date.now()}`;
    const password = "Paul";
    return request(server)
      .post("/user")
      .send({ username, password })
      .then((response) => {
        expect(response.body.password).not.toEqual(password);
      });
  });
});
