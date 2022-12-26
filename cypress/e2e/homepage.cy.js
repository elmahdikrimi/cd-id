/// <reference types="cypress" />
import homepage from "../POM/homepage"
describe('',()=>{
    let signUpData
    beforeEach(()=>{
        cy.visit('/');
        cy.fixture("example.json").then((data)=>{
            signUpData=data
        })
    })
    it('demo bar',()=>{
        homepage.checkDemoBar().should('have.css', 'background-color', 'rgb(255, 1, 1)')
        homepage.checkDemoBar().should('include.text','This is a demo store')
        homepage.search('radiant')
        cy.wait(2000)
        homepage.searchlist()
    })
    it('navigation bar',()=>{
        homepage.navigationBar().eq(1).trigger('mouseover')
        cy.get('ul.level0.submenu.ui-menu.ui-widget.ui-widget-content.ui-corner-all').eq(0).invoke('show')
        cy.get('#ui-id-9').should('be.visible').trigger('mouseover')
})
    it('log in',()=>{
        cy.login(signUpData.email,signUpData.password)
        cy.get('.logged-in').should('include.text','Welcome')
    })

    it('products',()=>{
        cy.get('li.product-item').eq(0).find('button[type="submit"]').click({force:true})
    })

})