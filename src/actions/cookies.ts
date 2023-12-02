import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../utils';

/**
 * When I clear cookies:
 *
 * ```gherkin
 * When I clear cookies
 * ```
 *
 * Clear browser cookies for a domain.
 *
 * @example
 *
 * ```gherkin
 * When I clear cookies
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/clearcookies#Arguments):
 *
 * ```gherkin
 * When I clear cookies
 *   | domain | example.com |
 *   | log | true |
 *   | timeout | 3000 |
 * ```
 *
 * @remarks
 *
 * Cypress automatically clears all cookies _before_ each test to prevent state from being shared across tests when [test isolation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Isolation) is enabled. You shouldn't need to use this command unless you're using it to clear a specific cookie inside a single test or test isolation is disabled.
 *
 * @see
 *
 * - {@link When_I_clear_cookie | When I clear cookie}
 * - {@link When_I_clear_all_cookies | When I clear all cookies}
 */
export function When_I_clear_cookies(options?: DataTable) {
  cy.clearCookies(getOptions(options));
}

When('I clear cookies', When_I_clear_cookies);

/**
 * When I clear all cookies:
 *
 * ```gherkin
 * When I clear all cookies
 * ```
 *
 * Clear all browser cookies.
 *
 * @example
 *
 * ```gherkin
 * When I clear all cookies
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/clearallcookies#Arguments):
 *
 * ```gherkin
 * When I clear all cookies
 *   | log | true |
 *   | timeout | 3000 |
 * ```
 *
 * @remarks
 *
 * Cypress automatically clears all cookies _before_ each test to prevent state from being shared across tests when [test isolation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Isolation) is enabled. You shouldn't need to use this command unless you're using it to clear a specific cookie inside a single test or test isolation is disabled.
 *
 * @see
 *
 * - {@link When_I_clear_cookies | When I clear cookies}
 */
export function When_I_clear_all_cookies(options?: DataTable) {
  cy.clearAllCookies(getOptions(options));
}

When('I clear all cookies', When_I_clear_all_cookies);
