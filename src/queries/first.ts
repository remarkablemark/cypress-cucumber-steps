import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, getOptions, setCypressElement } from '../utils';

/**
 * When I get first element:
 *
 * ```gherkin
 * When I get first element
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I get first element
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/first#Arguments):
 *
 * ```gherkin
 * When I get first element
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * This follows steps like {@link When_I_find_links_by_text | "When I find links by text"} and precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find links by text "Link"
 *   And I get first element
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_get_nth_element | When I get nth element}
 * - {@link When_I_get_last_element | When I get last element}
 */
export function When_I_get_first_element(options?: DataTable) {
  setCypressElement(getCypressElement().first(getOptions(options)));
}

When('I get first element', When_I_get_first_element);
