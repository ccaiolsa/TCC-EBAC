import {When, Then} from '@badeball/cypress-cucumber-preprocessor'

describe('template spec', () => {
  it('passes', () => {
    cy.visit("/")
  })
})