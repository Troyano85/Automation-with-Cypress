import "cypress-real-events";

Cypress.Commands.add('escribir', (selector, dato) => { 
        cy.get(selector).type(dato)
})

Cypress.Commands.add('mi_click', (selector) => { 
    cy.get(selector).realClick()
})