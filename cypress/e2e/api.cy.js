/// <reference types="cypress" />

describe('API',()=>{
    beforeEach(()=>{
        //cy.login2('recruiter_four','r4@123')
        cy.login2(Cypress.env('email'), Cypress.env('password'))
    })
    it('Api Login',()=>{
        cy.visit('https://ohrm.softwaretestingboard.com/symfony/web/index.php/auth/login')
        cy.request('POST','https://ohrm.softwaretestingboard.com/symfony/web/index.php/auth/validateCredentials',{

        body:[{
            "actionID":"",
            "hdnUserTimeZoneOffset":"1",    
            "_csrf_token":"688169756fb94fba03bb18bf1d8406cc",
            "textUsername":Cypress.env('email'),
            "textPassword":Cypress.env('password'),
            "Submit":'LOGIN'
            }]


        }).then((res)=>{
            expect(res.status).to.eq(200)
        })
        
        cy.visit('https://ohrm.softwaretestingboard.com/symfony/web/index.php/dashboard')
    })
    it('Dashboard',()=>{
    cy.visit('https://ohrm.softwaretestingboard.com/symfony/web/index.php/dashboard')
    cy.get('.quickLaungeContainer').find('td').should('have.length',3)
    })
    it.only('Directory',()=>{
        cy.visit('https://ohrm.softwaretestingboard.com/symfony/web/index.php/dashboard')
        cy.get('#menu_directory_viewDirectory').click()
        cy.url().should('contain','directory/viewDirectory/reset/1')
        cy.get('#searchDirectory_emp_name_empName').type('Dan')
        cy.get('.ac_results li').each(($el,index,$list)=>{
            if($el.text() === "Danny Barrientos"){
                cy.wrap($el).click()
            }
        })
        cy.get('#searchBtn').click()
        cy.get('#resultTable tr').should('have.length',2)
    })
})