const { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');
import 'cypress-mochawesome-reporter/cucumberSupport';


Given('o usuário estiver na home page', function(){
    cy.visit('/')
})
When("digitar {string} na barra de pesquisa e o usuário selecionar a cor {string} e o tamanho {string}", function(produto, cor, tamanho){
   cy.adicionarProduto(produto, cor, tamanho, 1)
});
When('digitar {string} na barra de pesquisa e o usuário selecionar a cor {string} e o tamanho {string} e a quantidade {string}', function(produto, cor, tamanho, quantidade){
    cy.adicionarProduto(produto, cor, tamanho, quantidade)
});
When("digitar {string} na barra de pesquisa e o usuário selecionar a cor {string}", function(produto, cor){
    cy.adicionarProduto(produto, cor, '', 1)

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



