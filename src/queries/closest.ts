import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';

/**
 * When I find closest element:
 *
 * ```gherkin
 * When I find closest element {string}
 * ```
 *
 * Get the first DOM element that matches the selector (whether it be itself or one of its ancestors).
 *
 * The querying behavior matches exactly how [`.closest()`](https://api.jquery.com/closest/) works in jQuery.
 *
 * @example
 *
 * Find the closest element with the class `banner`:
 *
 * ```gherkin
 * When I find closest element ".banner"
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_label_text | "When I find element by label text"} is required. For example:
 *
 * ```gherkin
 * When I find element by label text "Text"
 *   And I find closest element "form"
 *   And I submit
 * ```
 */
export function When_I_find_closest_element(selector: string) {
  setCypressElement(getCypressElement().closest(selector));
}

When('I find closest element {string}', When_I_find_closest_element);
