import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';

/**
 * When I find buttons by text:
 *
 * ```gherkin
 * When I find buttons by text {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I find buttons by text "Button"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find buttons by text "Button"
 *   And I get 1st element
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_find_button_by_text | When I find button by text}
 */
export function When_I_find_buttons_by_text(text: string) {
  const selector = ['button', "[type='button']", "[type='submit']"]
    .map((value) => `${value}:contains('${text}'):visible`)
    .join(',');
  setCypressElement(cy.get(selector));
}

When('I find buttons by text {string}', When_I_find_buttons_by_text);

/**
 * When I find button by text:
 *
 * ```gherkin
 * When I find button by text {string}
 * ```
 *
 * Finds first button element that matches text.
 *
 * @example
 *
 * ```gherkin
 * When I find button by text "Button"
 * ```
 *
 * @remarks
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
 * - {@link When_I_find_buttons_by_text | When I find buttons by text}
 */
export function When_I_find_button_by_text(text: string) {
  When_I_find_buttons_by_text(text);
  setCypressElement(getCypressElement().first());
}

When('I find button by text {string}', When_I_find_button_by_text);
