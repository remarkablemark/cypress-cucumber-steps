import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../../utils';

/**
 * Then I see location:
 *
 * ```gherkin
 * Then I see location
 *   | hash | {string} |
 *   | host | {string} |
 *   | hostname | {string} |
 *   | href | {string} |
 *   | origin | {string} |
 *   | pathname | {string} |
 *   | port | {string} |
 *   | protocol | {string} |
 *   | search | {string} |
 * ```
 *
 * @example
 *
 * Make assertions about every location property:
 *
 * ```gherkin
 * Then I see location
 *   | hash | #hash |
 *   | host | localhost:8081 |
 *   | hostname | localhost |
 *   | href | http://localhost:8081/commands/querying?key=value#hash |
 *   | origin | http://localhost:8081 |
 *   | pathname | /commands/querying |
 *   | port | 8081 |
 *   | protocol | http: |
 *   | search | ?key=value |
 * ```
 *
 * Check location for query params and pathname:
 *
 * ```gherkin
 * Then I see location
 *   | search | ?key=value |
 *   | pathname | /commands/querying |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_hash | Then I see hash}
 * - {@link Then_I_see_search | Then I see search}
 */
export function Then_I_see_location(location: DataTable) {
  const loc = getOptions(location);

  if (typeof loc?.port === 'number') {
    loc.port = String(loc.port);
  }

  cy.location().should('include', loc);
}

Then('I see location', Then_I_see_location);
