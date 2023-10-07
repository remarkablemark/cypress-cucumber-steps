import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I clear cookie:
 *
 * ```gherkin
 * When I clear cookie {string}
 * ```
 *
 * Clears a specific browser cookie.
 *
 * @example
 *
 * Clear the `authId` cookie:
 *
 * ```gherkin
 * When I clear cookie "authId"
 * ```
 *
 * @remarks
 *
 * Cypress automatically clears all cookies _before_ each test to prevent state from being shared across tests when [test isolation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Isolation) is enabled.
 *
 * _You shouldn't need to use this command unless you're using it to clear a specific cookie inside a single test or test isolation is disabled._
 */
export function When_I_clear_cookie(name: string) {
  cy.clearCookie(name);
}

When('I clear cookie {string}', When_I_clear_cookie);

/**
 * When I set cookie:
 *
 * ```gherkin
 * When I set cookie {string} to {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I set cookie "name" to "value"
 * ```
 *
 * @remarks
 *
 * Sets a browser cookie.
 */
export function When_I_set_cookie(name: string, value: string) {
  cy.setCookie(name, value);
}

When('I set cookie {string} to {string}', When_I_set_cookie);
