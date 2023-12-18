import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getHeadingElements, setCypressElement } from '../utils';

/**
 * When I find headings by text:
 *
 * ```gherkin
 * When I find headings by text {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I find headings by text "Heading"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find headings by text "Heading"
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
 * When I find headings by text "Heading"
 *   And I get 1st element
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_find_heading_by_text | When I find heading by text}
 */
export function When_I_find_headings_by_text(
  text: string,
  options?: DataTable,
) {
  setCypressElement(getHeadingElements(text, PseudoSelector.visible, options));
}

When('I find headings by text {string}', When_I_find_headings_by_text);

/**
 * When I find heading by text:
 *
 * ```gherkin
 * When I find heading by text {string}
 * ```
 *
 * Finds first heading element that matches text.
 *
 * @example
 *
 * ```gherkin
 * When I find heading by text "Heading"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find heading by text "Heading"
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
 * When I find heading by text "heading"
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_find_headings_by_text | When I find headings by text}
 */
export function When_I_find_heading_by_text(text: string, options?: DataTable) {
  setCypressElement(
    getHeadingElements(text, PseudoSelector.visible, options).first(),
  );
}

When('I find heading by text {string}', When_I_find_heading_by_text);
