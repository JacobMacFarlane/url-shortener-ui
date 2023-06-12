describe('Start Page', () => {

beforeEach(() => {
  cy.intercept( "GET", "http://localhost:3001/api/v1/urls", {
    statusCode: 200,
    fixture: "example.json"
  })
  cy.visit("http://localhost:3000/")
})

  it('render a header', () => {
    cy.get('h1').should('have.text', 'URL Shortener')
  })
  it("Should render a form", () => {
    cy.get('form').should('exist')
  })
  it("Should render data", () => {
    cy.get('.url-cont').should('exist').should('have.length', 1)
  })
  it("Should render a specific data", () => {
    cy.get('h3').should('have.text', 'ragga')
    cy.get('p').should('have.text', 'https://github.com/JacobMacFarlane/url-shortener-ui')
  })
})