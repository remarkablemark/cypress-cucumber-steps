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
 */
export function Then_I_see_textarea_has_value(value: string) {
  cy.get('textarea:visible').invoke('val').should('eq', value);
}

Then('I see textarea has value {string}', Then_I_see_textarea_has_value);
