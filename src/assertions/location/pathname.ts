import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../../utils';

/**
 * Then I see pathname:
 *
 * ```gherkin
 * Then I see pathname {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see pathname "/pathname"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/location#Arguments):
 *
 * ```gherkin
 * Then I see pathname "/pathname"
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_pathname_contains | Then I see pathname contains}
 */
export function Then_I_see_pathname(pathname: string, options?: DataTable) {
  cy.location(getOptions(options)).should((location) => {
    expect(location.pathname).to.equal(pathname);
  });
}

Then('I see pathname {string}', Then_I_see_pathname);

/**
 * Then I see pathname contains:
 *
 * ```gherkin
 * Then I see pathname contains {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see pathname contains "pathname"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/location#Arguments):
 *
 * ```gherkin
 * Then I see pathname contains "pathname"
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_pathname | Then I see pathname}
 */
export function Then_I_see_pathname_contains(
  pathname: string,
  options?: DataTable,
) {
  cy.location(getOptions(options)).should((location) => {
    expect(location.pathname).to.contain(pathname);
  });
}

Then('I see pathname contains {string}', Then_I_see_pathname_contains);
