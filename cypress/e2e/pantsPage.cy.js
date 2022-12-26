/// <reference types="cypress" />
import pantsPage from "../POM/pantsPage";
describe('pants page',()=>{
    let signData
    let sizes=[]
    let extractedColors=[]
    let envData
    let link
    beforeEach(()=>{
        cy.visit('promotions/pants-all.html');
        cy.fixture('example.json').then((data)=>{
            signData = data
        })
        envData = Cypress.env('email')
        link = Cypress.env('link')
    })


    it.skip('Verify Page Elements existence',()=>{
        cy.sLogin(signData.email, signData.password)
        pantsPage.verifyBreadCrumbs()
    })
    it.skip('Verify Displayed products amount vs counter:',()=>{
        cy.sLogin(signData.email, signData.password)
        pantsPage.verifyBreadCrumbs()
        pantsPage.VerifyProductsCounter()
    })
    
    it('Colors Extractor',()=>{
        
        cy.visit(link)
        cy.log(link)
        cy.log(envData)
        pantsPage.extractColors(extractedColors)
    })
    it('Verify Color picker',()=>{
        cy.sLogin(signData.email, signData.password)
        cy.visit('/aeon-capri.html')
        
        for(let color of extractedColors){
            pantsPage.verifyColors(color)
        }
    })
    it.skip('add to cart',()=>{
        cy.visit('/aeon-capri.html')
        cy.get('#product-price-1861')

        cy.get('div.swatch-attribute.size .swatch-attribute-options.clearfix div').each(($el)=>{
            sizes.push($el.text())
        })
        cy.log(sizes)
        
    })
})