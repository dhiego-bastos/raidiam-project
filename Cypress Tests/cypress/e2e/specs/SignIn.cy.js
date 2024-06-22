describe("Sign In Cases", () =>{
    before(() => {
        cy.clearCookies()
    })
    
    it('should log in to the app', () => {
        cy.visitPage('/')
        cy.login()
        cy.fixture('settings').then(settings => {
            const user = settings.user
            cy.get('[class="navbar navbar-light"]').within(()=> {
                cy.get('li').contains('Home').should('have.class', 'nav-link router-link-exact-active active')
                cy.get('li').contains('New Article').should('exist')
                cy.get('li').contains('Settings').should('exist')
                cy.get('li').contains(user).should('exist')
            })
        })
    })
})
