import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, getOptions, setCypressElement } from '../utils';

/**
 * When I get last element:
 *
 * ```gherkin
 * When I get last element
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I get last element
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/last#Arguments):
 *
 * ```gherkin
 * When I get last element
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
 *   And I get last element
 *   And I click
 * ```
 *
 * @see
 *
 * - {@link When_I_get_nth_element | When I get nth element}
 * - {@link When_I_get_first_element | When I get first element}
 */
export function When_I_get_last_element(options?: DataTable) {
  setCypressElement(getCypressElement().last(getOptions(options)));
}

When('I get last element', When_I_get_last_element);
