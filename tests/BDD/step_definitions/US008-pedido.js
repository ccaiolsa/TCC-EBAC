const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que o usuário esteja na página de checkout', () => {
    cy.visit('/')
    cy.get('[data-toggle="modal"]').eq(1).click()

    cy.get('[placeholder="Enter your search ..."]').eq(1).type('Ingrid Running Jacket')
    cy.get('#ui-id-1 > :nth-child(1)').should('exist').click()

    cy.get('.woocommerce-tabs').should('be.visible')
    cy.get(`.button-variable-item-Orange`).click()
    cy.get(`.button-variable-item-XS`).click()
    cy.get(`.button-variable-item-Orange`).click()

    cy.get('.single_add_to_cart_button').should('be.enabled').click()
    cy.visit('/checkout/')
});

When('o usuário preencher os campos {string}, {string}, {string}, {string}, {string}, {string}, {string} a forma de pagamento {string} e marcar os termos de aceite', function (nome, sobrenome, endereço, cidade, cep, telefone, email, pagamento) {
    cy.get('[name="billing_first_name"]').type(nome)
    cy.get('[name="billing_last_name"]').type(sobrenome)
    cy.get('#billing_address_1_field > label').type(endereço)
    cy.get('[name="billing_city"]').type(cidade)
    cy.get('[name="billing_postcode"]').type(cep)
    cy.get('[name="billing_phone"]').type(telefone)
    cy.get('[name="billing_email"]').type(email)

    cy.get(`#payment_method_${pagamento}`).click()
    cy.get('#terms').check()
    cy.get('#place_order').click()

});

When('o usuário preencher os campos {string}, {string}, {string}, {string}, {string}, {string}, {string} a forma de pagamento {string}', function (nome, sobrenome, endereço, cidade, cep, telefone, email, pagamento) {
    if (nome !== '' && sobrenome !== '' && endereço !== '' && cidade !== '' && cep !== '' && telefone !== '' && email !== '') {
        cy.get('[name="billing_first_name"]').type(nome)
        cy.get('[name="billing_last_name"]').type(sobrenome)
        cy.get('#billing_address_1_field > label').type(endereço)
        cy.get('[name="billing_city"]').type(cidade)
        cy.get('[name="billing_postcode"]').type(cep)
        cy.get('[name="billing_phone"]').type(telefone)
        cy.get('[name="billing_email"]').type(email)

        cy.get(`#payment_method_${pagamento}`).click()
        cy.get('#place_order').click()

    } else {
        cy.get('#place_order').click()
    }

});

Then('o usuário deve visualizar: {string}', function (mensagem) {
    cy.contains(mensagem).should('exist')
});
