/// <reference types="cypress" />

describe("First Test", () => {
  it("should find components .", () => {
    cy.visit("http://localhost:8000/users");
    // by Tag name
    cy.get("input");

    // Write on the input field.
    cy.get("input").type("Hello World");
  });
});
