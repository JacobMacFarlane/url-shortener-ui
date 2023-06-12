describe('the form', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {
      statusCode: 200,
      fixture: 'example.json'
    })
    cy.visit("http://localhost:3000/")
  })
  it('SHould display a form', () => {
   cy.get('.form-class')
    .get('.input-1').type('Luffy')
    .should('have.value', 'Luffy')
    .get('.input-2').type('https://github.com/turingschool-examples/url-shortener-api')
    .should('have.value', 'https://github.com/turingschool-examples/url-shortener-api')
    cy.intercept("POST", "http://localhost:3001/api/v1/urls", {
      statusCode: 201,
      fixture: 'form.json'
    })
    .get('button').click()
    cy.get('.url').should('have.length', 2)
    cy.get(':nth-child(2) > h3').should('have.text', 'Luffy')
    cy.get(':nth-child(2) > .short-url').should('have.text', "http://localhost:3001/useshorturl/4")
  })
})