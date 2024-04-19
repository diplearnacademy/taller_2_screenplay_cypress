const login_page = require('../pages/login_page')
const actions = require('../interactions/actions')

Cypress.Commands.add("autenticacionEnSaucedemo", (usuario, clave) => {
    cy.get(login_page.INPUT_USUARIO).type(usuario)
    cy.get(login_page.INPUT_PASSWORD).type(clave)
    //Click Nativo Cypress
    //cy.get(login_page.BTN_LOGIN).click()
    //Clic creado como Interaction
    cy.clickEnElemento(login_page.BTN_LOGIN)
})