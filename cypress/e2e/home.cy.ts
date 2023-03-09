describe("home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens and closes the about dialog", () => {
    cy.get("nav li").contains("About").click();
    cy.get("[aria-label='Close Dialog']").first().click();
  });

  it("toggles the accordion items", () => {
    cy.scrollTo("bottom");

    cy.get("[aria-expanded]").each(($accordionItem) => {
      cy.wrap($accordionItem).click();
      cy.get("[aria-labelledby]").should("be.visible");
      cy.wrap($accordionItem).click();
      cy.get("[aria-labelledby]").should("not.be.visible");
    });
  });
});

export {};
