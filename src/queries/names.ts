import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

/* eslint-disable tsdoc/syntax */
/**
 * When I find elements by name:
 *
 * ```gherkin
 * When I find elements by name {string}
 * ```
 *
 * > A name is not a good substitute for a label so you should generally use {@link When_I_find_element_by_label_text | "When I find element by label text"} instead.
 *
 * @example
 *
 * ```gherkin
 * When I find elements by name "text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find elements by name "password"
 *   And I get 1st element
 *   And I type "password"
 * ```
 *
 * @see
 *
 * - {@link When_I_find_element_by_name | When I find element by name}
 */
/* eslint-enable tsdoc/syntax */
export function When_I_find_elements_by_name(name: string) {
  setCypressElement(cy.get(`[name='${name}']:visible`));
}

When('I find elements by name {string}', When_I_find_elements_by_name);