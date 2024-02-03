import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../../utils';

/**
 * Then I see search:
 *
 * ```gherkin
 * Then I see search {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see search "?key=value"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/location#Arguments):
 *
 * ```gherkin
 * Then I see search "?key=value"
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * The location search (query string) includes the `?` character.
 *
 * @see
 *
 * - {@link Then_I_see_search_contains | Then I see search contains}
 */
export function Then_I_see_search(search: string, options?: DataTable) {
  cy.location(getOptions(options)).should((location) => {
    expect(location.search).to.equal(search);
  });
}

Then('I see search {string}', Then_I_see_search);

/**
 * Then I see search contains:
 *
 * ```gherkin
 * Then I see search contains {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see search contains "key=value"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/location#Arguments):
 *
 * ```gherkin
 * Then I see search contains "key=value"
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_search | Then I see search}
 */
export function Then_I_see_search_contains(
  search: string,
  options?: DataTable,
) {
  cy.location(getOptions(options)).should((location) => {
    expect(location.search).to.contain(search);
  });
}

Then('I see search contains {string}', Then_I_see_search_contains);
