/// <reference types="cypress" />
import home_page from "../support/pages/home_page"
import login_page from "../support/pages/login_page"
import user_dados from "../fixtures/user_dados.json"
import { faker } from '@faker-js/faker';


describe('Login', () => {

    beforeEach('Acessando site', () => {

        home_page.accessHomePage()
        home_page.accessLoginPage()
    })

    it('Campo e-mail vazio', () => {

        login_page.clickBtnLogin()
        login_page.checkMessage('E-mail inválido.')

    })

    it('Campo e-mail inválido', () => {

        login_page.fillEmail('italo')
        login_page.clickBtnLogin()
        login_page.checkMessage('E-mail inválido.')

    })

    it('Campo senha vazio', () => {
        
        login_page.fillEmail(user_dados.email)
        login_page.clickBtnLogin()
        login_page.checkMessage('Senha inválida.')

    })

    it('Campo senha inválido', () => {
        
        login_page.fillEmail(user_dados.email)
        login_page.fillPassword('12345')
        login_page.clickBtnLogin()
        login_page.checkMessage('Senha inválida.')

    })
    
    
    it('Login com sucesso', async () => {

        const email = await faker.internet.email()

        login_page.fillEmail(email)
        login_page.fillPassword(user_dados.password)
        login_page.loginSucess(email)
    })
})