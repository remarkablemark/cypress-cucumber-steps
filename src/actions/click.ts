import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * When I click:
 *
 * ```gherkin
 * When I click
 * ```
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
 * When I find element by text "Click Me"
 *   And I click
 * ```
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
 * @example
 *
 * ```gherkin
 * When I click on text "Click Me"
 * ```
 */
export function When_I_click_on_text(text: string) {
  cy.contains(text).click();
}

When('I click on text {string}', When_I_click_on_text);
