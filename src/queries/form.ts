import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

/**
 * When I find form:
 *
 * ```gherkin
 * When I find form
 * ```
 *
 * This finds one or more `<form>` elements.
 *
 * @example
 *
 * ```gherkin
 * When I find form
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_submit | "When I submit"}. For example:
 *
 * ```gherkin
 * When I find form
 *   And I submit
 * ```
 *
 * If multiple forms are found, then use {@link When_I_get_nth_element | "When I get nth element"}. For example:
 *
 * ```gherkin
 * When I find form
 *   And I get 1st element
 *   And I submit
 * ```
 */
export function When_I_find_form() {
  setCypressElement(cy.get('form'));
}

When('I find form', When_I_find_form);
