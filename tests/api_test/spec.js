import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('o usuário estiver na home page', ()=>{
    cy.visit('/')
})