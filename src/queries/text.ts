import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

/**
 * When I find button by text:
 *
 * ```gherkin
 * When I find button by text {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I find button by text "Button"
 * ```
 *
 * @remarks
 *
 * Finds first button element that matches text.
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find button by text "Button"
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_find_element_by_text | When I find element by text}
 * - {@link When_I_find_link_by_text | When I find link by text}
 */
export function When_I_find_button_by_text(text: string) {
  setCypressElement(this, cy.contains('button', text));
}

When('I find button by text {string}', When_I_find_button_by_text);

/**
 * When I find element by text:
 *
 * ```gherkin
 * When I find element by text {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I find element by text "Text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByText](https://testing-library.com/docs/queries/bytext).
 *
 * @see
 *
 * - {@link When_I_find_button_by_text | When I find button by text}
 * - {@link When_I_find_link_by_text | When I find link by text}
 */
export function When_I_find_element_by_text(text: string) {
  setCypressElement(this, cy.contains(text));
}

When('I find element by text {string}', When_I_find_element_by_text);

/**
 * When I find link by text:
 *
 * ```gherkin
 * When I find link by text {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I find link by text "Link"
 * ```
 *
 * @remarks
 *
 * Finds first link element that matches text.
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find link by text "Link"
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_find_button_by_text | When I find button by text}
 * - {@link When_I_find_element_by_text | When I find element by text}
 */
export function When_I_find_link_by_text(text: string) {
  setCypressElement(this, cy.contains('a', text));
}

When('I find link by text {string}', When_I_find_link_by_text);
