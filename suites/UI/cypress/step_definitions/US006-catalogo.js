const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given(`que o usuário esteja na página de busca`, function(){
    cy.visit('/produtos/')
});

When(`o usuário inserir {string} e filtrar por {string}`, function(palavraChave, filtro){
    cy.confCatalogo('',palavraChave, filtro)
});

When(`o usuário selecionar a categoria {string}`, function(categoria){
    cy.confCatalogo(categoria,'', 'Relevância')

});

When('o usuário digitar {string}', function(palavraChave){
    cy.confCatalogo('',palavraChave, '')
});

When('o usuário selecionar filtro {string}', function(filtro){
    cy.confCatalogo('','', filtro)
});

Then(`o usuário ter acesso à um catálogo de produtos personalizado`, function(){
    cy.get('.woof_remove_ppi').should('be.visible');
    cy.get(' .price > .woocommerce-Price-amount > bdi').then(($el) =>{
        const format = (valor) =>{
            const texto = valor.text().replace(/[^\d,-]/g,'').replace(',','.');
            return parseFloat(texto);
        }
        const primeiroValor = format($el.eq(0));
        const segundoValor = format($el.eq(8));
        expect(primeiroValor).to.be.lessThan(segundoValor);

    })
});

Then('o usuário ter acesso à um catálogo com os termos correspondentes {string} e {string}', function(termo1, termo2){
    cy.get(' .product-block > .caption > .meta > .infor > .name > a').each(($el) =>{
        const elemento = $el.text().toLowerCase();
        const verificar = elemento.includes(termo1) || elemento.includes(termo2)
        expect(verificar).to.be.true;
    })
});