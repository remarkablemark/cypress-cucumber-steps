import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

/**
 * When I get element by selector:
 *
 * ```gherkin
 * When I get element by selector {string}
 * ```
 *
 * Get the first DOM element by selector.
 *
 * @example
 *
 * Yield the first `<li>` in `.list`:
 *
 * ```gherkin
 * When I get element by selector ".list > li"
 * ```
 *
 * @see
 *
 * - {@link When_I_find_element_by_selector | When I find element by selector}
 */
export function When_I_get_element_by_selector(selector: string) {
  setCypressElement(cy.get(selector).first());
}

When('I get element by selector {string}', When_I_get_element_by_selector);
