const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que o usuário esteja na página minha conta', ()=>{
    cy.visit('/minha-conta/')
})

When('o usuário preencher os campos {string} e {string}', (email, senha)=>{
    if(email !== ''){
        cy.get('[name="email"]').type(email)
    };
    if(senha !== ''){
        cy.get('[name="password"]').eq(1).type(senha)
    };
    if(email === '' || senha === ''){
        cy.get('[name="register"]').click()
    };
    cy.get('[name="register"]').click()
})

Then('a mensagem {string} deve aparecer na tela', function(mensagem){
    cy.contains(mensagem).should('be.visible')
})