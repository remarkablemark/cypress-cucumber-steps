import { Then } from '@badeball/cypress-cucumber-preprocessor';

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
 * @remarks
 *
 * The URL hash includes the `#` character.
 *
 * @see
 *
 * - {@link Then_I_see_hash_contains | Then I see hash contains}
 */
export function Then_I_see_hash(hash: string) {
  cy.hash().should('equal', hash);
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
 * @see
 *
 * - {@link Then_I_see_hash | Then I see hash}
 */
export function Then_I_see_hash_contains(hash: string) {
  cy.hash().should('contain', hash);
}

Then('I see hash contains {string}', Then_I_see_hash_contains);
