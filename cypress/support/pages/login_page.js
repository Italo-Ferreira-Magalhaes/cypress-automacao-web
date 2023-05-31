/// <reference types="cypress" />
import user_dados from "c:/Users/user/Documents/cypress_automacao_web/cypress/fixtures/user_dados"

// Elementos
const elements = {
    buttons: {
        login: '#btnLogin'
    },

    fields: {
        email: '#user',
        password: '#password'
    },

    Messages: {
        loginSucess: '#swal2-title',
        wellcome: '#swal2-html-container',
        error: '.invalid_input'

    }
}

// Ações/Funções
export default {
    fillEmail(email) {
        cy.get(elements.fields.email)
            .type(email)
    },

    fillPassword(password) {
        cy.get(elements.fields.password)
            .type(password)
    },

    loginSucess(email) {
        cy.get(elements.buttons.login)
            .click()
            .get(elements.Messages.loginSucess)
            .should('contain', 'Login realizado')
            .get(elements.Messages.wellcome)
            .should('contain', `Olá, ${email}`)
    },

    clickBtnLogin() {
        cy.get(elements.buttons.login)
            .click()
    },

    checkMessage(message) {
        cy.get(elements.Messages.error)
            .should('have.text', message)
    }
}
