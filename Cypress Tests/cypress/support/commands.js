
Cypress.Commands.add('visitPage', (page) => {
    cy.fixture('settings').then((settings) => {
        if(page === 'home'){
            cy.visit(settings.url)
        }
        else{
            cy.visit(`${settings.url}${page}`)
        }
    })
})

Cypress.Commands.add('login',  () => {
    cy.get('[class="navbar navbar-light"]').within(() => {
        cy.get('a[href="#/login"]').should('contain.text', 'Sign in')
        .click()
    })
    cy.fixture('settings').then((settings) => {
        const email = settings.email
        const password = settings.password
        const API = settings.realWorldAPI
        cy.get('h1[class="text-xs-center"]').should('contain.text', 'Sign in')
        cy.get('form').within(() => {
            cy.get('input[placeholder="Email"]').type(email)
            cy.get('input[placeholder="Password"]').type(password)
            cy.intercept('GET', `${API}/user/`).as('login')
            cy.get('button[class="btn btn-lg btn-primary pull-xs-right"]').contains('Sign in').click()
            cy.wait('@login').its('response.statusCode').should('eq', 200)
        })
    })
})

Cypress.Commands.add('deleteArticle',  () => {
    cy.fixture('settings').then((settings) => {
        const API = settings.realWorldAPI
        cy.intercept('DELETE', `${API}/articles/**`).as('getArticles')
        cy.get('button[class="btn btn-outline-danger btn-sm"]').contains('Delete Article').click()
        cy.wait('@getArticles').its('response.statusCode').should('eq', 204)
    })

})
