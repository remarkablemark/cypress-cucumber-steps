import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I do not fail on uncaught exception', () => {
  Cypress.on('uncaught:exception', () => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
});
