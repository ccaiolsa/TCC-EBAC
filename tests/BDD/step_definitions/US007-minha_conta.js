const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que o usuário esteja na página minha conta', ()=>{
    cy.visit('/minha-conta/')
})

When('o usuário preencher os campos {string} e {string}', (email, senha)=>{
    cy.registrar(email,senha)
})

Then('a mensagem {string} deve aparecer na tela', function(mensagem){
    cy.contains(mensagem).should('be.visible')
})