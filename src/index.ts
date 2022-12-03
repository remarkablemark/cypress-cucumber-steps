import { When } from '@badeball/cypress-cucumber-preprocessor';

When('I visit {string}', (url: string) => {
  cy.visit(url);
});
