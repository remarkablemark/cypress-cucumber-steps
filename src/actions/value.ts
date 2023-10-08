import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * When I set value:
 *
 * ```gherkin
 * When I set value {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I set value "Value"
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_get_element_by_display_value | "When I get element by display value"} is required. For example:
 *
 * ```gherkin
 * When I get element by display value "Input"
 *   And I set value "Value"
 * ```
 */
export function When_I_set_value(value: string) {
  getCypressElement()
    .then(($element: Cypress.JQueryWithSelector) => $element.val(value))
    .trigger('change');
}

When('I set value {string}', When_I_set_value);
