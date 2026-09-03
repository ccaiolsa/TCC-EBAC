const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que o usuário esteja no carrinho de compras', function(){
    let produto = 'Arcadio Gym Short';
    let cor = 'Black';
    let tamanho = '32';

    cy.visit('/')
    cy.adicionarProduto(produto, cor, tamanho, 1);
})
When('e aplicar o cupom {string} para {string} produtos', function(cupom, quantidade){
    cy.adicionarCupom(cupom, quantidade);

});

Then('ele deverá receber a seguinte mensagem {string}', function(mensagem){
    cy.contains(mensagem).should('be.visible');
})