import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';

/**
 * When I get nth element:
 *
 * ```gherkin
 * When I get {int}st element
 * When I get {int}nd element
 * When I get {int}rd element
 * When I get {int}th element
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I get 1st element
 * When I get 2nd element
 * When I get 3rd element
 * When I get 4th element
 * ```
 *
 * @remarks
 *
 * This follows steps like {@link When_I_find_links_by_text | "When I find links by text"} and precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find links by text "Link"
 *   And I get 5th element
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_get_first_element | When I get first element}
 * - {@link When_I_get_last_element | When I get last element}
 *
 * @param position - A number indicating the position to find the element within an array of elements (starts with 1). If negative, the number indicates the position from the end to find the element.
 */
export function When_I_get_nth_element(position: number) {
  const cypressElement = getCypressElement();
  const index = position > 0 ? position - 1 : position;
  setCypressElement(cypressElement.eq(index));
}

When('I get {int}st element', When_I_get_nth_element);
When('I get {int}nd element', When_I_get_nth_element);
When('I get {int}rd element', When_I_get_nth_element);
When('I get {int}th element', When_I_get_nth_element);
