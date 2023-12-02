import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../utils';

/**
 * Then I see cookie:
 *
 * ```gherkin
 * Then I see cookie {string}
 * ```
 *
 * Assert cookie with name **_exists_**.
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
 *
 * @see
 *
 * - {@link Then_I_do_not_see_cookie | Then I do not see cookie}
 */
export function Then_I_see_cookie(name: string, options?: DataTable) {
  cy.getCookie(name, getOptions(options)).should('exist');
}

Then('I see cookie {string}', Then_I_see_cookie);

/**
 * Then I do not see cookie:
 *
 * ```gherkin
 * Then I do not see cookie {string}
 * ```
 *
 * Assert cookie with name **_does not exist_**.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see cookie "my-session-cookie"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/getcookie#Arguments):
 *
 * ```gherkin
 * Then I do not see cookie "my-session-cookie"
 *   | domain | example.com |
 *   | log | true |
 *   | timeout | 3000 |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_cookie | Then I see cookie}
 */
export function Then_I_do_not_see_cookie(name: string, options?: DataTable) {
  cy.getCookie(name, getOptions(options)).should('not.exist');
}

Then('I do not see cookie {string}', Then_I_do_not_see_cookie);
