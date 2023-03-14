describe("game", () => {
  it("starts a new game", () => {
    cy.visit("/");
    cy.get("button").contains("New Game").click();
    cy.get("#player-name").type("John Doe");
    cy.get("button").contains("Start the Game").click();
  });
});

export {};
