const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que o usuário esteja no seu perfil', function () {
    let email = 'user1_ebac';
    let senha = 'psw!ebac@test';

    cy.visit('/minha-conta/')
    cy.login(email, senha)
});

When('o usuário acessar a aba Detalhes da conta e preencher os campos {string}, {string}, {string}, {string}', function (Fname, Lname, Dname, email) {
    cy.confDetalhes(Fname, Lname, Dname, email)
});

When('o usuário acessar a aba Detalhes da conta e apertar o botão Salvar alterações', function () {
    cy.confDetalhes('', '', '', '')
});

When('o usuário acessar a aba Detalhes da conta e preencher apenas o campo {string}', function(email){
    cy.confDetalhes('', '', '', email)
});

Then('deve aparecer: {string}', function (mensagem){
    cy.contains(`${mensagem}`).should('be.visible')
});