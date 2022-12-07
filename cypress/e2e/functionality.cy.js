context('My First Tests', () => {
  it('Cards Work', () => {
      cy.visit('https://pse-umich.org/news-events')
      cy.get('.card').find('h3').eq(0).click()
      cy.get('.card').find('h3').eq(1).click()
      cy.get('.card').find('h3').eq(2).click()
  })
  it('Navbar hover event correctly changes color', () => {
    cy.visit('https://pse-umich.org/')
    cy.get('.hamburger').click()
    cy.get('.nav-links').find('li').eq(0).trigger('mouseover').should('have.css', 'color')
    cy.get('.nav-links').find('li').eq(1).trigger('mouseover').should('have.css', 'color')
    cy.get('.nav-links').find('li').eq(2).trigger('mouseover').should('have.css', 'color')
    cy.get('.nav-links').find('li').eq(3).trigger('mouseover').should('have.css', 'color')
    cy.get('.nav-links').find('li').eq(4).trigger('mouseover').should('have.css', 'color')
})
it('Navbar visibility tests', () => {
  cy.visit('https://pse-umich.org/')
  cy.get('.nav-links').should('not.be.visible')
  cy.get('.hamburger').click()
  cy.get('.nav-links').should('not.be.visible')
  cy.get('.nav-links').find('li').eq(0).should('be.visible')
  cy.get('.nav-links').find('li').eq(1).should('be.visible')
  cy.get('.nav-links').find('li').eq(2).should('be.visible')
  cy.get('.nav-links').find('li').eq(3).should('be.visible')
  cy.get('.nav-links').find('li').eq(4).should('be.visible')
  cy.get('.hamburger').click()
  cy.get('.nav-links').should('not.be.visible')
})
it('Checking window location on home page', () => {
  cy.visit('https://pse-umich.org/')
  cy.location().should((location) => {
    expect(location.href).to.eq('https://pse-umich.org/')
    expect(location.host).to.eq('pse-umich.org')
    expect(location.origin).to.eq('https://pse-umich.org')
    expect(location.pathname).to.eq('/')
    expect(location.protocol).to.eq('https:')
  })
})

it('Checking window location after clicking around navbar', () => {
  cy.visit('https://pse-umich.org/')

  cy.get('.hamburger').click()
  //about
  cy.get('.nav-links').find('li').eq(0).click()
  cy.location().should((location) => {
    expect(location.href).to.eq('https://pse-umich.org/about')
    expect(location.host).to.eq('pse-umich.org')
    expect(location.pathname).to.eq('/about')
    expect(location.protocol).to.eq('https:')
  })
  
  cy.get('.hamburger').click()
  //apply
  cy.get('.nav-links').find('li').eq(1).click()
  cy.location().should((location) => {
    expect(location.href).to.eq('https://pse-umich.org/apply')
    expect(location.host).to.eq('pse-umich.org')
    expect(location.pathname).to.eq('/apply')
    expect(location.protocol).to.eq('https:')
  })

  cy.get('.hamburger').click()
  //members
  cy.get('.nav-links').find('li').eq(2).click()
  cy.location().should((location) => {
    expect(location.href).to.eq('https://pse-umich.org/members')
    expect(location.host).to.eq('pse-umich.org')
    expect(location.pathname).to.eq('/members')
    expect(location.protocol).to.eq('https:')
  })

  cy.get('.hamburger').click()
  //news & events
  cy.get('.nav-links').find('li').eq(3).click()
  cy.location().should((location) => {
    expect(location.href).to.eq('https://pse-umich.org/news-events')
    expect(location.host).to.eq('pse-umich.org')
    expect(location.pathname).to.eq('/news-events')
    expect(location.protocol).to.eq('https:')
  })

  cy.get('.hamburger').click()
  //contact us
  cy.get('.nav-links').find('li').eq(4).click()
  cy.location().should((location) => {
    expect(location.href).to.eq('https://pse-umich.org/contact-us')
    expect(location.host).to.eq('pse-umich.org')
    expect(location.pathname).to.eq('/contact-us')
    expect(location.protocol).to.eq('https:')
  })
})

it('Contact Us page has rendering links', () => {
  cy.visit('https://pse-umich.org/contact-us')
  cy.get('.contact').find('.social_container').eq(0)
  cy.get('.contact').find('.social_container').eq(1)
  cy.get('.contact').find('.social_container').eq(2)

})
})