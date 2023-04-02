import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see textarea has value:
 *
 * ```gherkin
 * Then I see textarea has value {string}
 * ```
 *
 * Assert textarea with exact value is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see textarea has value "Value"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_textarea_has_value_containing | Then I see textarea has value containing }
 */
export function Then_I_see_textarea_has_value(value: string) {
  cy.get('textarea:visible').invoke('val').should('eq', value);
}

Then('I see textarea has value {string}', Then_I_see_textarea_has_value);

/**
 * Then I see textarea has value containing:
 *
 * ```gherkin
 * Then I see textarea has value containing {string}
 * ```
 *
 * Assert textarea with partial value is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see textarea has value containing "Value"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_textarea_has_value | Then I see textarea has value }
 */
export function Then_I_see_textarea_has_value_containing(value: string) {
  cy.get('textarea:visible').invoke('val').should('include', value);
}

Then(
  'I see textarea has value containing {string}',
  Then_I_see_textarea_has_value_containing
);
