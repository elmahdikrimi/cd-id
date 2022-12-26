class homePage {

    pageElements ={
        demoBar : () => cy.get('div.message.global.demo'),
        signInbar: () => cy.get('div.panel.wrapper'),
        search: () => cy.get('#search'),
        searchli:()=> cy.get('ul[role="listbox"] li').as('searchList'),
        navigationBar:()=> cy.get('.navigation ul li.level0')
    }

    checkDemoBar(){
        return this.pageElements.demoBar()
    }
    search(query){
        return this.pageElements.search().type(query)
    }
    searchlist(){
        return this.pageElements.searchli().each(($el)=>{
            if($el.text().includes('Tree')){
                $el.click()
            }
        })
    }
    navigationBar(){
        return this.pageElements.navigationBar()
    }
}
module.exports = new homePage();