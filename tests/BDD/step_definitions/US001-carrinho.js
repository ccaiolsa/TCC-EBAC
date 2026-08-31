const { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');
import 'cypress-mochawesome-reporter/cucumberSupport';


Given('o usuário estiver na home page', () => {
    cy.visit('/')
})
When("digitar {string} na barra de pesquisa e o usuário selecionar a cor {string} e o tamanho {string}", (produto, cor, tamanho) => {
    cy.get('[data-toggle="modal"]').eq(1).click()

    cy.get('[placeholder="Enter your search ..."]').eq(1).type(produto)
    cy.get('#ui-id-1 > :nth-child(1)').should('exist').click()

    cy.get('.woocommerce-tabs').should('be.visible')
    cy.get(`.button-variable-item-${cor}`).click()
    cy.get(`.button-variable-item-${tamanho}`).click()
    cy.get(`.button-variable-item-${cor}`).click()
    cy.get('.single_add_to_cart_button').should('be.enabled').click()


});
When('digitar {string} na barra de pesquisa e o usuário selecionar a cor {string} e o tamanho {string} e a quantidade {string}', (produto, cor, tamanho, quantidade) => {
    cy.get('[data-toggle="modal"]').eq(1).click()

    cy.get('[placeholder="Enter your search ..."]').eq(1).type(produto)
    cy.get('#ui-id-1 > :nth-child(1)').should('exist').click()

    cy.get('.woocommerce-tabs').should('be.visible')
    cy.get(`.button-variable-item-${cor}`).click()
    cy.get(`.button-variable-item-${tamanho}`).click()
    cy.get(`.button-variable-item-${cor}`).click()

    cy.get('[name="quantity"]').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').should('be.enabled').click()

});
When("digitar {string} na barra de pesquisa e o usuário selecionar a cor {string}", (produto, cor) => {
    cy.get('[data-toggle="modal"]').eq(1).click()

    cy.get('[placeholder="Enter your search ..."]').eq(1).type(produto)
    cy.get('#ui-id-1 > :nth-child(1)').should('exist').click()

    cy.get('.woocommerce-tabs').should('be.visible')
    cy.get(`.button-variable-item-${cor}`).click()
    cy.get(`.button-variable-item-${cor}`).click()

});

Then("deve aparecer a seguinte mensagem {string}", function (mensagem) {
    cy.contains(mensagem).should('be.visible')
});

Then("deve aparecer um popup com a mensagem {string}", function (mensagem) {
    cy.on('window:alert', (texto) => {
        expect(texto).to.equal(mensagem);
    });
});

Then("deve aparecer a seguinte mensagem não deve aparecer {string}", function (mensagem) {
    cy.contains(mensagem).should('be.not.exist')
});



