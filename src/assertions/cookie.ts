import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../utils';

/**
 * Then I see cookie:
 *
 * ```gherkin
 * Then I see cookie {string}
 * ```
 *
 * Assert cookie with name exists.
 *
 * @example
 *
 * ```gherkin
 * Then I see cookie "my-session-cookie"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/getcookie#Arguments):
 *
 * ```gherkin
 * Then I see cookie "my-session-cookie"
 *   | domain | example.com |
 *   | log | true |
 *   | timeout | 3000 |
 * ```
 */
export function Then_I_see_cookie(name: string, options?: DataTable) {
  cy.getCookie(name, getOptions(options)).should('exist');
}

Then('I see cookie {string}', Then_I_see_cookie);
