/// <reference types="Cypress" />

describe("my first test suite", function () {
  it("my first test", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);
  });
});
