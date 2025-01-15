/// <reference types="Cypress" />
//import "cypress-real-events";
import pantalla from './selectores/pantalla'

describe('template spec', () => {
var misdatos;
  beforeEach('passes', () => {
      cy.visit('/')
      //cy.viewport(1100,900)
      cy.fixture('./users_ok')
        .then(mis_test => {// cuando llegan todos los datos
             misdatos = mis_test; // lo que llega lo cargo en misdatos
        }) 
  })
  it('passes', () => {
    misdatos.forEach((renglon) => { // obtengo un renglón
      cy.escribir(pantalla.login.usuario,renglon.usuario)
      cy.escribir(pantalla.login.clave,renglon.clave)	

      cy.mi_click(pantalla.login.btn_ingresar)
      // menu - Abrir menu hamburguesa
      cy.mi_click(pantalla.menu.icon_burger)	
      //cy.screenshot('imagen')
      cy.mi_click(pantalla.menu.btn_logout)

      cy.get(pantalla.login.sel_title).should('have.text',pantalla.login.msg_title) //aserción
      // este comando llama a el logout y a una aserción sobre el título encontrado en la web de respuesta
    })
  })
})