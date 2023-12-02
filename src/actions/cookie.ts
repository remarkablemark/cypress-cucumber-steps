import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../utils';

/**
 * When I clear cookie:
 *
 * ```gherkin
 * When I clear cookie {string}
 * ```
 *
 * Clear a specific browser cookie.
 *
 * @example
 *
 * Clear the `authId` cookie:
 *
 * ```gherkin
 * When I clear cookie "authId"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/clearcookie#Arguments):
 *
 * ```gherkin
 * When I clear cookie "authId"
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
 * - {@link When_I_clear_cookies | When I clear cookies}
 * - {@link When_I_set_cookie | When I set cookie}
 */
export function When_I_clear_cookie(name: string, options?: DataTable) {
  cy.clearCookie(name, getOptions(options));
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
 * Set a browser cookie:
 *
 * ```gherkin
 * When I set cookie "name" to "value"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/setcookie#Arguments):
 *
 * ```gherkin
 * When I set cookie "name" to "value"
 *   | log | true |
 *   | domain | example.com |
 *   | expiry | 1234567890 |
 *   | hostOnly | false |
 *   | httpOnly | false |
 *   | path | / |
 *   | secure | false |
 *   | timeout | 3000 |
 *   | sameSite | undefined |
 * ```
 *
 * @see
 *
 * - {@link When_I_clear_cookie | When I clear cookie}
 */
export function When_I_set_cookie(
  name: string,
  value: string,
  options?: DataTable,
) {
  cy.setCookie(name, value, getOptions(options));
}

When('I set cookie {string} to {string}', When_I_set_cookie);
