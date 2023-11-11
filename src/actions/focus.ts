import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, getOptions } from '../utils';

/**
 * When I focus:
 *
 * ```gherkin
 * When I focus
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I focus
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/focus#Arguments):
 *
 * ```gherkin
 * When I focus
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I focus
 * ```
 */
export function When_I_focus(options?: DataTable) {
  getCypressElement().focus(getOptions(options));
}

When('I focus', When_I_focus);
