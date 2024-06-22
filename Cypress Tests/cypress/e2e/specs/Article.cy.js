import { faker } from '@faker-js/faker'

describe("Article", () =>{
    before(() => {
        cy.clearCookies()
    })
    
    it('should create a new Article', () => {
        const title = faker.lorem.words(3)
        const description = faker.lorem.words(10)
        const body = faker.lorem.words(50)
        const tag = faker.lorem.words(1)

        cy.visitPage('/')
        cy.login()

        cy.get('[class="navbar navbar-light"]').within(() => {
            cy.get('a[href="#/editor"]').should('contain.text', 'New Article')
            .click()
        })
        cy.get('form').within(() => {
            cy.get('input[placeholder="Article Title"]').type(title)
            cy.get('input[placeholder$="article about?"]').type(description)
            cy.get('textarea[placeholder^="Write your article"]').type(body)
            cy.get('input[placeholder="Enter tags"]').type(tag)
        })
        cy.get('button[class="btn btn-lg pull-xs-right btn-primary"]').contains('Publish Article').click()

        cy.fixture('settings').then(settings => {
            const user = settings.user
            cy.get('div[class="banner"]').should('contain.text', title)
            cy.get('div[class="article-meta"]').should('contain.text', user)
            cy.get('div[class="container page"]').should('contain.text', body)
            //cy.get('div[class="tag-list"]').should('contain.text', tag)
            cy.get('form[class="card comment-form"]').should('exist')
        })

        cy.deleteArticle()
    })
})
