import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';

/**
 * When I get first element:
 *
 * ```gherkin
 * When I get first element
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I get first element
 * ```
 *
 * @remarks
 *
 * This follows steps like {@link When_I_find_element_by_text | "When I find element by text"} and precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I get first element
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_get_last_element | When I get last element}
 */
export function When_I_get_first_element() {
  const cypressElement = getCypressElement(this);
  setCypressElement(this, cypressElement.first());
}

When('I get first element', When_I_get_first_element);

/**
 * When I get last element:
 *
 * ```gherkin
 * When I get last element
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I get last element
 * ```
 *
 * @remarks
 *
 * This follows steps like {@link When_I_find_element_by_text | "When I find element by text"} and precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I get last element
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_get_first_element | When I get first element}
 */
export function When_I_get_last_element() {
  const cypressElement = getCypressElement(this);
  setCypressElement(this, cypressElement.last());
}

When('I get last element', When_I_get_last_element);
