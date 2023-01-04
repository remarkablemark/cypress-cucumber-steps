import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

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
 * - {@link When_I_find_buttons_by_text | When I find buttons by text}
 */
export function When_I_find_links_by_text(text: string) {
  setCypressElement(cy.get(`a:contains('${text}')`));
}

When('I find links by text {string}', When_I_find_links_by_text);
