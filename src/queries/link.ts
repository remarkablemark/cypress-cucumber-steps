import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getLinkElements, setCypressElement } from '../utils';

/**
 * When I find links by text:
 *
 * ```gherkin
 * When I find links by text {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I find links by text "Link"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find links by text "Link"
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
 * When I find links by text "Link"
 *   And I get 1st element
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_find_link_by_text | When I find link by text}
 */
export function When_I_find_links_by_text(text: string, options?: DataTable) {
  setCypressElement(getLinkElements(text, PseudoSelector.visible, options));
}

When('I find links by text {string}', When_I_find_links_by_text);

/**
 * When I find link by text:
 *
 * ```gherkin
 * When I find link by text {string}
 * ```
 *
 * Finds first link element that matches text.
 *
 * @example
 *
 * ```gherkin
 * When I find link by text "Link"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find link by text "Link"
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
 * When I find link by text "Link"
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_find_links_by_text | When I find links by text}
 */
export function When_I_find_link_by_text(text: string, options?: DataTable) {
  setCypressElement(
    getLinkElements(text, PseudoSelector.visible, options).first(),
  );
}

When('I find link by text {string}', When_I_find_link_by_text);
