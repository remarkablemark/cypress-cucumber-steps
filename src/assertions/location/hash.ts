import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../../utils';

/**
 * Then I see hash:
 *
 * ```gherkin
 * Then I see hash {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see hash "#hash"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/hash#Arguments):
 *
 * ```gherkin
 * Then I see hash "#hash"
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * The URL hash includes the `#` character.
 *
 * @see
 *
 * - {@link Then_I_see_hash_contains | Then I see hash contains}
 */
export function Then_I_see_hash(hash: string, options?: DataTable) {
  cy.hash(getOptions(options)).should('equal', hash);
}

Then('I see hash {string}', Then_I_see_hash);

/**
 * Then I see hash contains:
 *
 * ```gherkin
 * Then I see hash contains {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see hash contains "hash"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/hash#Arguments):
 *
 * ```gherkin
 * Then I see hash contains "hash"
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_hash | Then I see hash}
 */
export function Then_I_see_hash_contains(hash: string, options?: DataTable) {
  cy.hash(getOptions(options)).should('contain', hash);
}

Then('I see hash contains {string}', Then_I_see_hash_contains);
