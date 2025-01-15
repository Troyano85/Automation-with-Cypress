/// <reference types="Cypress" />
describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('/')
  })

  it('passes', () => {
   cy.get('[data-test="username"]').type('standard_user')
   cy.get('[data-test="password"]').type('secret_sauce')	
   cy.get('[data-test="login-button"]').click()	
   cy.get('#react-burger-menu-btn').click()	
   cy.screenshot('imagen')
   cy.get('[data-test="logout-sidebar-link"]').click()	
   cy.get('#root > div > div.login_logo').should('have.text','Laboratorio') //aserción
   // este comando llama a el logout y a una aserción sobre el título encontrado en la web de respuesta

  })
})