import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * Then I see value:
 *
 * ```gherkin
 * Then I see value {string}
 * ```
 *
 * Assert element with exact value is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see value "Value"
 * ```
 *
 * A preceding step like {@link When_I_find_element_by_label_text | "When I find element by label text"} is required. For example:
 *
 * ```gherkin
 * When I find element by label text "Input"
 * Then I see value "Value"
 * ```
 */
export function Then_I_see_value(value: string) {
  getCypressElement().invoke('val').should('eq', value);
}

Then('I see value {string}', Then_I_see_value);

/**
 * Then I see input value:
 *
 * ```gherkin
 * Then I see input value {string}
 * ```
 *
 * Assert first visible input has exact value.
 *
 * @example
 *
 * ```gherkin
 * Then I see input value "Value"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_input_value_contains | Then I see input value contains}
 */
export function Then_I_see_input_value(value: string) {
  cy.get('input:visible').invoke('val').should('eq', value);
}

Then('I see input value {string}', Then_I_see_input_value);

/**
 * @deprecated Use {@link Then_I_see_input_value} instead.
 */
Then('I see input has value {string}', Then_I_see_input_value);

/**
 * Then I see input value contains:
 *
 * ```gherkin
 * Then I see input value contains {string}
 * ```
 *
 * Assert input with partial value is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see input value contains "Value"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_input_value | Then I see input value}
 */
export function Then_I_see_input_value_contains(value: string) {
  cy.get('input:visible').invoke('val').should('include', value);
}

Then('I see input value contains {string}', Then_I_see_input_value_contains);

/**
 * @deprecated Use {@link Then_I_see_input_value_contains} instead.
 */
Then(
  'I see input has value containing {string}',
  Then_I_see_input_value_contains,
);

/**
 * Then I see textarea value:
 *
 * ```gherkin
 * Then I see textarea value {string}
 * ```
 *
 * Assert textarea with exact value is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see textarea value "Value"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_textarea_value_contains | Then I see textarea value contains}
 */
export function Then_I_see_textarea_value(value: string) {
  cy.get('textarea:visible').invoke('val').should('eq', value);
}

Then('I see textarea value {string}', Then_I_see_textarea_value);

/**
 * @deprecated Use {@link Then_I_see_textarea_value} instead.
 */
Then('I see textarea has value {string}', Then_I_see_textarea_value);

/**
 * Then I see textarea value contains:
 *
 * ```gherkin
 * Then I see textarea value contains {string}
 * ```
 *
 * Assert textarea with partial value is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see textarea value contains "Value"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_textarea_value | Then I see textarea value}
 */
export function Then_I_see_textarea_value_contains(value: string) {
  cy.get('textarea:visible').invoke('val').should('include', value);
}

Then(
  'I see textarea value contains {string}',
  Then_I_see_textarea_value_contains,
);

/**
 * @deprecated Use {@link Then_I_see_textarea_value_contains} instead.
 */
Then(
  'I see textarea has value containing {string}',
  Then_I_see_textarea_value_contains,
);
