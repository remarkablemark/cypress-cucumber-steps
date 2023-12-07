import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, getOptions, setCypressElement } from '../utils';

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
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find buttons by text "Button"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
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
export function When_I_find_buttons_by_text(text: string, options?: DataTable) {
  const buttons = [
    'button',
    "[type='button']",
    "[type='submit']",
    "[role='button']",
  ];

  const selector1 = buttons
    .map((selector) => `${selector}:contains(${JSON.stringify(text)}):visible`)
    .join(',');

  const selector2 = buttons
    .map((selector) => `${selector}[value=${JSON.stringify(text)}]:visible`)
    .join(',');

  setCypressElement(cy.get(`${selector1},${selector2}`, getOptions(options)));
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
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find button by text "Button"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
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
export function When_I_find_button_by_text(text: string, options?: DataTable) {
  When_I_find_buttons_by_text(text, options);
  setCypressElement(getCypressElement().first());
}

When('I find button by text {string}', When_I_find_button_by_text);
