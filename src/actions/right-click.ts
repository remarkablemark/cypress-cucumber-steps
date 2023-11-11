import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, getOptions } from '../utils';

/**
 * When I right-click:
 *
 * ```gherkin
 * When I right-click
 * ```
 *
 * Alternative:
 *
 * - {@link When_I_right_click_on_text | When I right-click on text}
 *
 * @example
 *
 * ```gherkin
 * When I right-click
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/rightclick#Arguments):
 *
 * ```gherkin
 * When I right-click
 *   | altKey | false |
 *   | animationDistanceThreshold | 5 |
 *   | ctrlKey | false |
 *   | log | true |
 *   | force | false |
 *   | metaKey | false |
 *   | multiple | false |
 *   | scrollBehavior | top |
 *   | shiftKey | false |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I right-click
 * ```
 *
 * @see
 *
 * - {@link When_I_click | When I click}
 * - {@link When_I_double_click | When I double-click}
 */
export function When_I_right_click(options?: DataTable) {
  getCypressElement().rightclick(getOptions(options));
}

When('I right-click', When_I_right_click);

/**
 * When I right-click on text:
 *
 * ```gherkin
 * When I right-click on text {string}
 * ```
 *
 * Alternative:
 *
 * - {@link When_I_right_click | When I right-click}
 *
 * @example
 *
 * ```gherkin
 * When I right-click on text "Text"
 * ```
 *
 * @see
 *
 * - {@link When_I_click_on_text | When I click on text}
 * - {@link When_I_double_click_on_text | When I double-click on text}
 */
export function When_I_right_click_on_text(text: string) {
  cy.contains(text).rightclick();
}

When('I right-click on text {string}', When_I_right_click_on_text);
