const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que o usuário estiver no seu perfil', function () {
    let email = 'user1_ebac';
    let senha = 'psw!ebac@test';

    cy.visit('/minha-conta/')
    cy.login(email, senha)
});


When("o usuário acessar Endereço -> Shipping Address e preencher os campos {string}, {string}, {string}, {string}, {string},{string}, {string}", function (Fname, Lname, país, endereço, cidade, estado, cep) {
    cy.confEndereco(Fname, Lname, país, endereço, cidade, estado, cep)
});

When('o usuário acessar Endereço -> Shipping Address e não preencher os campos', function () {
    cy.confEndereco('', '', '', '', '', '', '')
});

When('o usuário acessar Endereço -> Shipping Address e preencher os campos {string}', function (cep) {
    cy.confEndereco('', '', '', '', '', '', cep)

});

Then("a {string} deve aparecer", function (mensagem) {
    cy.contains(mensagem).should('be.visible')
});