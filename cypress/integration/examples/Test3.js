/// <reference types="Cypress" />

describe("my first test suite", function () {
  it("my first test", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // checkbox
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    cy.get("input[type='checkbox']").check(['option2', 'option3']);

    //dropdown
    cy.get("select").select("Option2").should("have.value", "option2")

    cy.get("#autocomplete").type("ind");

    cy.get(".ui-menu-item div").each(($el, index, $list) => { 
      if ($el.text() == 'india') {
        $el.click();
      }
    });


  });
});
