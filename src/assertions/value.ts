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
 * @remarks
 *
 * A preceding step like {@link When_I_find_input_by_label_text | "When I find input by label text"} is required. For example:
 *
 * ```gherkin
 * When I find input by label text "Input"
 * Then I see value "Value"
 * ```
 */
export function Then_I_see_value(value: string) {
  getCypressElement().should(($element: Cypress.JQueryWithSelector) => {
    expect($element).value(value);
  });
}

Then('I see value {string}', Then_I_see_value);

/**
 * Then I do not see value:
 *
 * ```gherkin
 * Then I do not see value {string}
 * ```
 *
 * Assert element with exact value **_does not exist_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see value "Value"
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_input_by_label_text | "When I find input by label text"} is required. For example:
 *
 * ```gherkin
 * When I find input by label text "Input"
 * Then I do not see value "Value"
 * ```
 */
export function Then_I_do_not_see_value(value: string) {
  getCypressElement().should(($element: Cypress.JQueryWithSelector) => {
    expect($element.val()).to.not.equal(value);
  });
}

Then('I do not see value {string}', Then_I_do_not_see_value);

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
  cy.get('input:visible')
    .filter((index, element: HTMLInputElement) => element.value === value)
    .should('exist');
}

Then('I see input value {string}', Then_I_see_input_value);

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
  cy.get('input:visible')
    .filter((index, element: HTMLInputElement) => element.value.includes(value))
    .should('exist');
}

Then('I see input value contains {string}', Then_I_see_input_value_contains);

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
  cy.get('textarea:visible')
    .filter((index, element: HTMLTextAreaElement) => element.value === value)
    .should('exist');
}

Then('I see textarea value {string}', Then_I_see_textarea_value);

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
  cy.get('textarea:visible')
    .filter((index, element: HTMLTextAreaElement) =>
      element.value.includes(value),
    )
    .should('exist');
}

Then(
  'I see textarea value contains {string}',
  Then_I_see_textarea_value_contains,
);
