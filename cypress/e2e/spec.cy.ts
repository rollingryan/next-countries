describe("Next Countries", () => {
  describe("WHEN: visiting /", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("SHOULD: render all the expected elements", () => {
      cy.get('[data-cy="logo"]').should("be.visible");
      cy.get('[data-cy="countries-wrap"]').should("be.visible");
      cy.get('[data-cy="country-card"]')
        .should("be.visible")
        .and("have.length", 250);

      cy.get('[data-cy="country-card"]')
        .eq(0)
        .within(() => {
          cy.get('[data-cy="country-card__name"]').should("be.visible");
          cy.get('[data-cy="country-card__flag"]').should("be.visible");
          cy.get('[data-cy="country-card__population"]').should("be.visible");
          cy.get('[data-cy="country-card__capital"]').should("be.visible");
          cy.get('[data-cy="country-card__button"]').should("be.visible");
        });
    });

    it("SHOULD: navigate to the country detail page", () => {
      cy.get('[data-cy="country-card"]')
        .eq(0)
        .within(() => {
          cy.get('[data-cy="country-card__button"]').click();
        });

      cy.url().should("include", "/af");

      it("SHOULD: render all the expected elements", () => {
        cy.get('[data-cy="country-detail"]').should("be.visible");
        cy.get('[data-cy="country-detail__flag"]').should("be.visible");
        cy.get('[data-cy="country-detail__name"]').should("be.visible");
        cy.get('[data-cy="country-detail__population"]').should("be.visible");
        cy.get('[data-cy="country-detail__capital"]').should("be.visible");
        cy.get('[data-cy="country-detail__languages"]').should("be.visible");
        cy.get('[data-cy="country-detail__currencies"]').should("be.visible");

        cy.get('[data-cy="border-countries"]').should("be.visible");
        cy.get('[data-cy="border-countries__heading"]').should("be.visible");
        cy.get('[data-cy="border-countries__wrap"]').should("be.visible");
        cy.get('[data-cy="border-countries__wrap--inner"]').should(
          "be.visible"
        );

        cy.get('[data-cy="country-detail__back"]').should("be.visible").click();
        cy.url().should("equal", "http://localhost:3000/");
      });

      it("SHOULD: render the expected elements when an island", () => {
        cy.get('[data-cy="country-card"]')
          .eq(1)
          .within(() => {
            cy.get('[data-cy="country-card__button"]').click();
          });

        cy.url().should("include", "/ax");

        it("SHOULD: render all the expected elements", () => {
          cy.get('[data-cy="border-countries__island"]').should("be.visible");
        });
      });
    });
  });
});
