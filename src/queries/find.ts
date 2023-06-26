import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';

/**
 * When I find element by selector:
 *
 * ```gherkin
 * When I find element by selector {string}
 * ```
 *
 * Get the descendent DOM elements of a specific selector.
 *
 * The querying behavior of this command matches exactly how [`.find()`](https://api.jquery.com/find/) works in jQuery.
 *
 * @example
 *
 * Find the element with the class `banner`:
 *
 * ```gherkin
 * When I find element by selector ".banner"
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_form | "When I find form"} is required. For example:
 *
 * ```gherkin
 * When I find form
 *   And I find element by selector "input[type='checkbox']"
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_get_element_by_selector | When I get element by selector}
 */
export function When_I_find_element_by_selector(selector: string) {
  setCypressElement(getCypressElement().find(selector));
}

When('I find element by selector {string}', When_I_find_element_by_selector);
