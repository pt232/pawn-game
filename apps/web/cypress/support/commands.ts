/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector: string) => {
  return cy.get(`[data-testid='${selector}']`);
});

export {};
