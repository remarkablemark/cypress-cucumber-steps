import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * When I select:
 *
 * ```gherkin
 * When I select {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I select "Option"
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_get_element_by_selector | "When I get element by selector"} is required. For example:
 *
 * ```gherkin
 * When I get element by selector "select"
 *   And I select "Option"
 * ```
 *
 * @see
 *
 * - {@link When_I_select_option | When I select option}
 */
export function When_I_select(displayValue: string) {
  getCypressElement().select(displayValue);
}

When('I select {string}', When_I_select);

/**
 * When I select option:
 *
 * ```gherkin
 * When I select option {string}
 * ```
 *
 * Select the first option by display value.
 *
 * @example
 *
 * ```gherkin
 * When I select option "Option"
 * ```
 *
 * @see
 *
 * - {@link When_I_select | When I select}
 */
export function When_I_select_option(displayValue: string) {
  cy.get('option')
    .contains(displayValue)
    .closest('select')
    .select(displayValue);
}

When('I select option {string}', When_I_select_option);
