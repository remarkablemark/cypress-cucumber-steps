import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';

/**
 * When I get children:
 *
 * ```gherkin
 * When I get children
 * ```
 *
 * Get the children of each DOM element within a set of DOM elements.
 *
 * The querying behavior of this command matches exactly how [`.children()`](https://api.jquery.com/children/) works in jQuery.
 *
 * @example
 *
 * ```gherkin
 * When I get children
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_form | "When I find form"} is required. For example:
 *
 * ```gherkin
 * When I find form
 *   And I get children
 *   And I get last element
 *   And I click
 * ```
 */
export function When_I_get_children() {
  setCypressElement(getCypressElement().children());
}

When('I get children', When_I_get_children);
