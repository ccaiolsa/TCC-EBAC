const { Given, When, Then, DataTable } = require('@badeball/cypress-cucumber-preprocessor');
import 'cypress-mochawesome-reporter/cucumberSupport';

Given('que o usuário esteja na página de login', function(){
    cy.visit('/minha-conta/')
});
When('o usuário inserir o email {string} e senha {string}',function(email, senha){
    cy.login(email, senha)

});
Then('o usuário deve ser redirecionado para a página do perfil do usuário',function(){
    cy.contains('Olá').should('be.visible')
});
Then('a seguinte mensagem deve aparecer: {string}',function(mensagem){
    cy.contains(mensagem).should('be.visible')
})
