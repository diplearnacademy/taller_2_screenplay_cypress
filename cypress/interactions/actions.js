Cypress.Commands.add("clickEnElemento", (elemento) => {
    cy.get(elemento).click()
})