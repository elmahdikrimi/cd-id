class pantsPage {
    pageElements = {
        breadCrumbs: () => cy.get('li.item.category32 strong').should('include.text','Pants'),
        pageTitle: () => cy.get('#page-title-heading span').should('include.text','Pants'),
        narrowList: ()=> cy.get('#narrow-by-list div[data-role="collapsible"]').should('have.length',12),
        productContainer: ()=> cy.get('div[data-container="product-grid"]').as('products'),
        productCounter: ()=> cy.get('p#toolbar-amount span.toolbar-number').eq(1).as('counter'),
        colors:()=> cy.get('div[attribute-code="color"] div.swatch-attribute-options.clearfix div'),
        productImg:()=> cy.get('.fotorama__img')
    }
    verifyBreadCrumbs(){
        return [
            this.pageElements.breadCrumbs(), 
            this.pageElements.pageTitle(),
            this.pageElements.narrowList(),
            this.pageElements.productContainer(),
            this.pageElements.productCounter()
        ]
    }
   VerifyProductsCounter(num){
        cy.get('@counter').then(($counter)=>{
        num = Number($counter.text())
        cy.log(num)
        return cy.get('@products').should('have.length',num)
     })
   }
   verifyColors(Color){
    let src
    return [    
    cy.get(`div[option-label="${Color}"]`).click(),
    cy.wait(2000),
    cy.get('span.swatch-attribute-selected-option').then(($el)=>{
    expect($el.text()).to.eq(Color)}),
    this.pageElements.productImg().then((img)=>{
    src = img.prop('src')
    expect(src).to.include(`${Color.toLowerCase()}_main_1.jpg`)
    })
    ]
   }
   extractColors(arr){
    this.pageElements.colors().each(($el)=>{
        arr.push($el.attr('option-label'))
    })
    cy.writeFile('cypress/fixtures/ex.json', { colors: arr })
   }
   verifySize(arr){ 
   }
}

module.exports = new pantsPage()