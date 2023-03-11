import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * When I double-click:
 *
 * ```gherkin
 * When I double-click
 * ```
 *
 * Alternative:
 *
 * - {@link When_I_double_click_on_text | When I double-click on text}
 *
 * @example
 *
 * ```gherkin
 * When I double-click
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I double-click
 * ```
 *
 * @see
 *
 * - {@link When_I_click | When I click}
 * - {@link When_I_right_click | When I right-click}
 */
export function When_I_double_click() {
  getCypressElement().dblclick();
}

When('I double-click', When_I_double_click);

/**
 * When I double-click on text:
 *
 * ```gherkin
 * When I double-click on text {string}
 * ```
 *
 * Alternative:
 *
 * - {@link When_I_double_click | When I double-click}
 *
 * @example
 *
 * ```gherkin
 * When I double-click on text "Text"
 * ```
 *
 * @see
 *
 * - {@link When_I_click_on_text | When I click on text}
 * - {@link When_I_right_click_on_text | When I right-click on text}
 */
export function When_I_double_click_on_text(text: string) {
  cy.contains(text).dblclick();
}

When('I double-click on text {string}', When_I_double_click_on_text);
