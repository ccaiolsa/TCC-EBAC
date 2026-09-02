const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que o usuário esteja no seu perfil', function () {
    let email = 'user1_ebac';
    let senha = 'psw!ebac@test';

    cy.visit('/minha-conta/')
    cy.get('[name="username"]').type(email)
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(senha)
    cy.get('[name="login"]').click()
});

When('o usuário acessar a aba Detalhes da conta e preencher os campos {string}, {string}, {string}, {string}', function (Fname, Lname, Dname, email) {
    cy.contains('Detalhes da conta').click()
    cy.get('[name="account_first_name"]').clear().type(Fname)
    cy.get('[name="account_last_name"]').clear().type(Lname)
    cy.get('[name="account_display_name"]').clear().type(Dname)
    cy.get('[name="account_email"]').clear().type(email)
    cy.get('[name="save_account_details"]').click()
});

When('o usuário acessar a aba Detalhes da conta e apertar o botão Salvar alterações', function () {
    cy.contains('Detalhes da conta').click()
    cy.get('[name="account_first_name"]').clear()
    cy.get('[name="account_last_name"]').clear()
    cy.get('[name="account_display_name"]').clear()
    cy.get('[name="account_email"]').clear()
    cy.get('[name="save_account_details"]').click()
});

When('o usuário acessar a aba Detalhes da conta e preencher apenas o campo {string}', function(email){
    cy.contains('Detalhes da conta').click()
    cy.get('[name="account_first_name"]').clear()
    cy.get('[name="account_last_name"]').clear()
    cy.get('[name="account_display_name"]').clear()
    cy.get('[name="account_email"]').clear().type(email)
    cy.get('[name="save_account_details"]').click()
});

Then('deve aparecer: {string}', function (mensagem){
    cy.contains(`${mensagem}`).should('be.visible')
});