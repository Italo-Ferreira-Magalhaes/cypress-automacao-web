/// <reference types="cypress" />

// Elementos 
const elements = {
    buttons: {
        login: '.fa-user',
        register: '.fa-lock'
    },

    fields: {
        topHeader: '#top_header',
        loginForm: '.account_form',
        registerForm: '.account_form',
        
    },

    messages: {

    }
}

// Ações/Funções

export default {
    accessHomePage() {
        cy.visit('/')
            .get(elements.fields.topHeader)
    },

    accessLoginPage() {
        cy.get(elements.buttons.login)
            .click()
            .get(elements.fields.loginForm)
            .should('be.visible')
    },

    accessRegisterPage() {
        cy.get(elements.buttons.register)
            .click()
            .get(elements.fields.registerForm)
            .should('be.visible')
    }


}