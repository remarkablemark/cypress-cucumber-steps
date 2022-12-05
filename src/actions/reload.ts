import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I reload the page:
 *
 * ```gherkin
 * When I reload the page
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I reload the page
 * ```
 */
export function When_I_reload_the_page() {
  cy.reload();
}

When('I reload the page', When_I_reload_the_page);
