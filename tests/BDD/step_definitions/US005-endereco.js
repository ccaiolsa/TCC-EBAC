const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que o usuário estiver no seu perfil', function () {
    let email = 'user1_ebac';
    let senha = 'psw!ebac@test';

    cy.visit('/minha-conta/')
    cy.get('[name="username"]').type(email)
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(senha)
    cy.get('[name="login"]').click()
});


When("o usuário acessar Endereço -> Shipping Address e preencher os campos {string}, {string}, {string}, {string}, {string},{string}, {string}", function (Fname, Lname, país, endereço, cidade, estado, cep) {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(2) > .title > .edit').click()

    cy.get('[name="shipping_first_name"]').clear().type(Fname)
    cy.get('[name="shipping_last_name"]').clear().type(Lname)
    cy.get('[name="shipping_country"]').select(país, { force: true })
    cy.get('[name="shipping_address_1"]').clear().type(endereço)
    cy.get('[name="shipping_city"]').clear().type(cidade)
    cy.get('[name="shipping_state"]').clear().type(estado)
    cy.get('[name="shipping_postcode"]').clear().type(cep)
    cy.get('[name="save_address"]').click()
});

When('o usuário acessar Endereço -> Shipping Address e não preencher os campos', function () {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(2) > .title > .edit').click()

    cy.get('[name="shipping_first_name"]').clear()
    cy.get('[name="shipping_last_name"]').clear()
    cy.get('[name="shipping_address_1"]').clear()
    cy.get('[name="shipping_city"]').clear()
    cy.get('[name="shipping_state"]').clear()
    cy.get('[name="shipping_postcode"]').clear()
    cy.get('[name="save_address"]').click()

});

When('o usuário acessar Endereço -> Shipping Address e preencher os campos {string}', function (cep) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(2) > .title > .edit').click()

    cy.get('[name="shipping_first_name"]').clear()
    cy.get('[name="shipping_last_name"]').clear()
    cy.get('[name="shipping_address_1"]').clear()
    cy.get('[name="shipping_city"]').clear()
    cy.get('[name="shipping_state"]').clear()
    cy.get('[name="shipping_postcode"]').clear().type(cep)
    cy.get('[name="save_address"]').click()

});

Then("a {string} deve aparecer", function (mensagem) {
    cy.contains(mensagem).should('be.visible')
});