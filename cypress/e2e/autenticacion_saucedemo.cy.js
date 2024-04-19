/// <reference types="cypress"/>
const autenticacion = require('../tasks/autenticacion');
const question = require('../questions/validacion_login');

describe('Screenplay con Cypress', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.title().should('eq', 'Swag Labs')
})

    it('Autenticacion exitosa Saucedemo', () => {
        cy.autenticacionEnSaucedemo('standard_user', 'secret_sauce')
        cy.loginExitoso()
    })
})