const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que o usuário esteja no carrinho de compras', function(){
    cy.visit('/produtos/')
})
When('e aplicar o cupom {string} para {string} produtos', function(cupom, quantidade){
    let produto = 'Arcadio Gym Short';
    let cor = 'Black';
    let tamanho = '32';

    cy.contains(produto).click();
    cy.get(`.button-variable-item-${tamanho}`).click();
    cy.get(`.button-variable-item-${cor}`).click();
    cy.get(`.button-variable-item-${tamanho}`).click();
    cy.get('[name="quantity"]').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').click();

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade).click();
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click();

    cy.get('[name="coupon_code"]').type(cupom).type('{enter}');
});

Then('ele deverá receber a seguinte mensagem {string}', function(mensagem){
    cy.contains(mensagem).should('be.visible');
})