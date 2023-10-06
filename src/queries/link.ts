import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';

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
export function When_I_find_links_by_text(text: string) {
  setCypressElement(cy.get(`a:contains(${JSON.stringify(text)}):visible`));
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
export function When_I_find_link_by_text(text: string) {
  When_I_find_links_by_text(text);
  setCypressElement(getCypressElement().first());
}

When('I find link by text {string}', When_I_find_link_by_text);
