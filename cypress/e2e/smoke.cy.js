context('My First Tests', () => {
  beforeEach(() => {
    cy.visit('https://pse-umich.org/')
  })

  //Simple get, find, and should tests
  //To ensure that everything is rendering to the page correctly
  //Specifically the most important info (dates, titles, etc)
  it('Has an H1 on the page', () => {
      cy.get('h1').should('exist')
  })
  it('Has the correct title', () => {
    cy.get('title').should('contain.text', 'PSE Michigan')
  })
  it('Correct Application Date', () => {
    cy.get('.recruitment').find('h5').should('contain.text', 'Applications for Fall 2022 due September 14th @ 11:59 PM EST')
  })
  it('Timeline Dates Rendering', () => {
    cy.get('.timeline').find('h4').should('exist')
  })

})