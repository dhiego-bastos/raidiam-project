import { faker } from '@faker-js/faker'

describe("Sign Up Cases", () =>{
    before(() => {
            cy.clearCookies()
        })
    
    it('should register a new user', () => {
        const email = faker.internet.email()
        const user = faker.internet.userName()
        const password = faker.internet.password()

        cy.visitPage('/')
        cy.get('[class="navbar navbar-light"]').within(() => {
            cy.get('a[href="#/register"]').should('contain.text', 'Sign up')
            .click()
        })
        cy.get('h1[class="text-xs-center"]').should('contain.text', 'Sign up')
        cy.get('form').within(() => {
            cy.get('input[placeholder="Username"]').type(user)
            cy.get('input[placeholder="Email"]').type(email)
            cy.get('input[placeholder="Password"]').type(password)
            cy.get('button[class="btn btn-lg btn-primary pull-xs-right"]').contains('Sign up').click()
        })

        cy.get('[class="navbar navbar-light"]').within(()=> {
            cy.get('li').contains('Home').should('have.class', 'nav-link router-link-exact-active active')
            cy.get('li').contains('New Article').should('exist')
            cy.get('li').contains('Settings').should('exist')
            cy.get('li').contains(user).should('exist')
        })
    })

})
