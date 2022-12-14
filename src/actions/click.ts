import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * When I click:
 *
 * ```gherkin
 * When I click
 * ```
 *
 * Alternative:
 *
 * - {@link When_I_click_on_text | When I click on text}
 *
 * @example
 *
 * ```gherkin
 * When I click
 * ```
 *
 * @remarks
 *
 * This requires a preceding step like {@link When_I_find_element_by_text | "When I find element by text"}. For example:
 *
 * ```gherkin
 * When I find element by text "Click Me Once"
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_double_click | When I double-click}
 * - {@link When_I_double_click_on_text | When I double-click on text}
 */
export function When_I_click() {
  getCypressElement(this).click();
}

When('I click', When_I_click);

/**
 * When I click on text:
 *
 * ```gherkin
 * When I click on text {string}
 * ```
 *
 * Alternative:
 *
 * - {@link When_I_click | When I click}
 *
 * @example
 *
 * ```gherkin
 * When I click on text "Click Me Once"
 * ```
 *
 * @see
 *
 * - {@link When_I_double_click | When I double-click}
 * - {@link When_I_double_click_on_text | When I double-click on text}
 */
export function When_I_click_on_text(text: string) {
  cy.contains(text).click();
}

When('I click on text {string}', When_I_click_on_text);

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
 * This requires a preceding step like {@link When_I_find_element_by_text | "When I find element by text"}. For example:
 *
 * ```gherkin
 * When I find element by text "Click Me Twice"
 *   And I double-click
 * ```
 *
 * @see
 *
 * - {@link When_I_click | When I click}
 * - {@link When_I_click_on_text | When I click on text}
 */
export function When_I_double_click() {
  getCypressElement(this).dblclick();
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
 * When I double-click on text "Click Me Twice"
 * ```
 *
 * @see
 *
 * - {@link When_I_click | When I click}
 * - {@link When_I_click_on_text | When I click on text}
 */
export function When_I_double_click_on_text(text: string) {
  cy.contains(text).dblclick();
}

When('I double-click on text {string}', When_I_double_click_on_text);
