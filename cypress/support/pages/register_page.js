/// <reference types="cypress" />


/// ELEMENTOS
const elements = {
    buttons: {
        register: '#btnRegister'
    },

    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },

    message: {
        sucessRegister: '#swal2-title',
        wellcome: '#swal2-html-container',
        error: '#errorMessageFirstName'
    }
}



/// AÇÕES / FUNÇÕES
export default {

    fillName(name) {
        cy.get(elements.fields.name)
            .type(name)
            .should('be.visible')
    },

    fillEmail(email) {
        cy.get(elements.fields.email)
            .type(email)
            .should('be.visible')
    },

    fillPassword(password) {
        cy.get(elements.fields.password)
            .type(password)
            .should('be.visible')
    },

    clickRegisterBtn() {
        cy.get(elements.buttons.register)
            .click()
    },

    sucessRegister(errorMessage, name) {
        cy.get(elements.buttons.register)
            .click()
            .get(elements.message.sucessRegister)
            .should('have.text', errorMessage)
            .should('be.visible')
            
        cy.get(elements.message.wellcome)
            .should('have.text', `Bem-vindo ${name}`)
            .should('be.visible')
    },

    checkMessage(errorMessage) {
        cy.get(elements.message.error)
            .should('contain', errorMessage)
            .should('be.visible')
    }
}