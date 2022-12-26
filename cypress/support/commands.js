// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login',(email,password)=>{
    cy.contains('Sign In').click()
    cy.url().should('include','customer/account/login/')
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('#send2').click()
})

Cypress.Commands.add('sLogin', (email, password) => {
    cy.session('loginSession1', () => {
    cy.visit('customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9wcm9tb3Rpb25zL3BhbnRzLWFsbC5odG1s/')
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('#send2').click()
    })
  })

  Cypress.Commands.add('login2',(email,password)=>{
    cy.session([email,password], ()=>{
        cy.visit('https://ohrm.softwaretestingboard.com/symfony/web/index.php/auth/login')
        cy.get('#txtUsername').type(email)
        cy.get('#txtPassword').type(password)
        cy.get('#btnLogin').click()
        cy.url().should('contain','/dashboard')
    })

  })
  