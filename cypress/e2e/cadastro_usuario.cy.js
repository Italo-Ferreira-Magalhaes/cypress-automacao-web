/// <reference types="cypress" />
import home_page from "../support/pages/home_page"
import register_page from "../support/pages/register_page"
import user_dados from "../fixtures/user_dados.json"

describe('Cadastro', () => {

    beforeEach('Acessando cadastro de usuário', () => {

        home_page.accessHomePage()
        home_page.accessRegisterPage()
    })

    it('Campo nome vazio', () => {

        register_page.clickRegisterBtn()
        register_page.checkMessage('O campo nome deve ser prenchido')

    })

    it('Campo e-mail vazio', () => {

        register_page.fillName(user_dados.name)
        register_page.clickRegisterBtn()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo e-mail inválido', () => {

        register_page.fillName(user_dados.name)
        register_page.fillEmail('EmailInválido')
        register_page.clickRegisterBtn()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', () => {

        register_page.fillName(user_dados.name)
        register_page.fillEmail(user_dados.email)
        register_page.clickRegisterBtn()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Campo senha inválido', () => {

        register_page.fillName(user_dados.name)
        register_page.fillEmail(user_dados.email)
        register_page.fillPassword('12345')
        register_page.clickRegisterBtn()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Cadastro com sucesso', () => {

        register_page.fillName(user_dados.name)
        register_page.fillEmail(user_dados.email)
        register_page.fillPassword(user_dados.password)
        register_page.sucessRegister('Cadastro realizado!', user_dados.name)

    })
})