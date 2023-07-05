const server = "http://localhost:3000";
const request = require("supertest");
const fs = require("fs");
//const { describe, expect, test } = require("@jest/globals");
// we've commented out the line above ^ because the global variables are already available once we install jest

// test user creation

// TODO: make sure tests that create a user also delete them so not to clutter?
// not super important but iwll make our DB easier to visually inspect
xdescribe("User Creation", () => {
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

  it("attempt to create a duplicate user returns a 400 status code and error object", () => {
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

xdescribe("User Deletion", () => {
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

xdescribe("User Authentication", () => {
  const username = "Paul";
  const password = "Paul";
  it("should return user if user password is correct", () => {
    // login route request
    return request
      .get("/login")
      .send({ username, password })
      .then((response) => {
        expect(response.body.username).toEqual(username);
      });
  });
});
