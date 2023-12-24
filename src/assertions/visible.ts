import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, getOptions } from '../utils';

/**
 * Then I see element is visible:
 *
 * ```gherkin
 * Then I see element is visible
 * ```
 *
 * Assert element **_is visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see element is visible
 * ```
 *
 * With options:
 *
 * ```gherkin
 * Then I see element is visible
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 * Then I see element is visible
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_element_is_not_visible | Then I see element is not visible}
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_element_is_visible(options?: DataTable) {
  getCypressElement().should('be.visible', getOptions(options));
}

Then('I see element is visible', Then_I_see_element_is_visible);

/**
 * Then I see element is not visible:
 *
 * ```gherkin
 * Then I see element is not visible
 * ```
 *
 * Assert element **_exists_** but is **_hidden** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see element is not visible
 * ```
 *
 * With options:
 *
 * ```gherkin
 * Then I see element is visible
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 * Then I see element is not visible
 * ```
 *
 * @see
 *
 * - {@link Then_I_do_not_see_text | Then I do not see text}
 * - {@link Then_I_do_not_see_visible_text | Then I do not see visible text}
 * - {@link Then_I_see_element_does_not_exist | Then I see element does not exist}
 * - {@link Then_I_see_element_is_visible | Then I see element is visible}
 */
export function Then_I_see_element_is_not_visible(options?: DataTable) {
  getCypressElement().should('not.be.visible', getOptions(options));
}

Then('I see element is not visible', Then_I_see_element_is_not_visible);
