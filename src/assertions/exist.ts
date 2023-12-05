import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, getOptions } from '../utils';

/**
 * Then I see element exists:
 *
 * ```gherkin
 * Then I see element exists
 * ```
 *
 * Assert element **_exists_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see element exists
 * ```
 *
 * With options:
 *
 * ```gherkin
 * Then I see element exists
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 * Then I see element exists
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_element_is_visible | Then I see element is visible}
 * - {@link Then_I_see_element_does_not_exist | Then I see element does not exist}
 */
export function Then_I_see_element_exists(options?: DataTable) {
  getCypressElement().should('exist', getOptions(options));
}

Then('I see element exists', Then_I_see_element_exists);

/**
 * Then I see element does not exist:
 *
 * ```gherkin
 * Then I see element does not exist
 * ```
 *
 * Assert element **_does not exist_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see element does not exist
 * ```
 *
 * With options:
 *
 * ```gherkin
 * Then I see element does not exist
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_get_element_by_selector | "When I get element by selector"} is required. For example:
 *
 * ```gherkin
 * When I get element by selector ".loading"
 * Then I see element does not exist
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_element_is_not_visible | Then I see element is not visible}
 * - {@link Then_I_see_element_exists | Then I see element exists}
 */
export function Then_I_see_element_does_not_exist(options?: DataTable) {
  getCypressElement().should('not.exist', getOptions(options));
}

Then('I see element does not exist', Then_I_see_element_does_not_exist);
