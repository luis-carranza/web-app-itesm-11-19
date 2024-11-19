const user = require("../../models/users");

describe("User Model", () => {
  it("should have a method isAdult", () => {
    expect(user.schema.methods.isAdult).toBeDefined();
  });
  it("should return true if the user is 18 or older", () => {
    const user1 = new user({ username: "user1", age: 18 });
    expect(user1.isAdult()).toBeTruthy();
  });
  it("should return false if the user is younger than 18", () => {
    const user2 = new user({ username: "user2", age: 17 });
    expect(user2.isAdult()).toBeFalsy();
  });
});
