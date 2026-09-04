const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que o usuário esteja na página de checkout', function(){
    cy.visit('/')
    cy.adicionarProduto('Ingrid Running Jacket','Orange','XS',1)
    cy.visit('/checkout/')
});

When('o usuário preencher os campos {string}, {string}, {string}, {string}, {string}, {string}, {string} a forma de pagamento {string} e marcar os termos de aceite', function (nome, sobrenome, endereço, cidade, cep, telefone, email, pagamento) {
    cy.checkout(nome, sobrenome, endereço, cidade, cep, telefone, email, pagamento,1)
});

When('o usuário preencher os campos {string}, {string}, {string}, {string}, {string}, {string}, {string} a forma de pagamento {string}', function (nome, sobrenome, endereço, cidade, cep, telefone, email, pagamento) {
    cy.checkout(nome, sobrenome, endereço, cidade, cep, telefone, email, pagamento,0)
});

Then('o usuário deve visualizar: {string}', function (mensagem) {
    cy.contains(mensagem).should('exist')
});
