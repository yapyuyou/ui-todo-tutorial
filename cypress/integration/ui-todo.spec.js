const DEV_URL = "http://localhost:3000";

describe("CRUD flow - ui-todo", () => {
  before(() => {
    cy.visit(DEV_URL).wait(1000);
  });

  it("should display header", () => {
    cy.get("[data-cy=header]").should("have.text", "TODO");
  });

  it("should be able to add todo", () => {
    cy.get("[data-cy=todo-input__input]").type("Buy Groceries");
    cy.get("[data-cy=todo-input__button").click();

    cy.get("[data-cy=todo-input__input]").type("Write TODO app");
    cy.get("[data-cy=todo-input__button").click();

    cy.get("[data-cy=todo-input__input]").type("Send masks to grandma");
    cy.get("[data-cy=todo-input__button").click();

    cy.get("[data-cy=todo-task__name]").should("contain.text","Buy Groceries");
    cy.get("[data-cy=todo-task__name]").should("contain.text","Write TODO app");
    cy.get("[data-cy=todo-task__name]").should("contain.text","Send masks to grandma");
  });

  it("should be able to delete todo", () => {
    cy.get("[data-cy=todo-task__button-delete]").click({multiple: true});
  });

});
