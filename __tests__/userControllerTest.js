const server = "http://localhost:3000";
const request = require("supertest");
const fs = require("fs");
const { describe, expect, test } = require("@jest/globals");

// test user creation

// TODO: make sure tests that create a user also delete them so not to clutter?
// not super important but iwll make our DB easier to visually inspect
describe("User Creation", () => {
  // first let's check that it returns an object
  xit("responds with 200 status and object", () => {
    const username = `Paul${Date.now()}`;

    const password = "Paul";
    return request(server)
      .post("/user")
      .send({ username, password })
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  xit("password is not the same as the original (should be hashed)", () => {
    const username = `Paul${Date.now()}`;

    const password = "Paul";
    return request(server)
      .post("/user")
      .send({ username, password })
      .then((response) => {
        expect(response.body.password).not.toEqual(password);
      });
  });

  // TODO: double check this one!
  it("doesn't allow creation of a duplicate user ; returns a 400 status code", () => {
    const username = "Paul";
    const password = "Paul";
    return request(server)
      .post("/user")
      .send({ username, password })
      .then((response) => {
        expect(response.status).toEqual(400); // expect a 400 status code
        expect(response).toHaveProperty("error");
      });
  });
});

describe("User Deletion", () => {
  it("deletes user from database", () => {
    const username = `Paul${Date.now()}`;
    const password = "Paul";

    return request(server)
      .post("/user")
      .send({ username, password })
      .then(() => {
        request(server)
          .delete("/user")
          .send({ username, password })
          .then((response) => {
            expect(response.body.deletedCount).toEqual(1);
          });
      });
  });
});
