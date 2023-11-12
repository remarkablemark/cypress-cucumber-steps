import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, getOptions } from '../utils';

/**
 * When I scroll into view:
 *
 * ```gherkin
 * When I scroll into view
 * ```
 *
 * Scroll an element into view.
 *
 * @example
 *
 * ```gherkin
 * When I scroll into view
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/scrollintoview#Arguments):
 *
 * ```gherkin
 * When I scroll into view
 *   | duration | 0 |
 *   | easing | swing |
 *   | log | true |
 *   | offset | { "top": 0, "left": 0 } |
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I scroll into view
 * ```
 *
 * @see
 *
 * - {@link When_I_scroll_window_to_position | When I scroll window to position}
 * - {@link When_I_scroll_window_to_x_y_coordinates | When I scroll window to x-y coordinates}
 */
export function When_I_scroll_into_view(options?: DataTable) {
  getCypressElement().scrollIntoView(getOptions(options));
}

When('I scroll into view', When_I_scroll_into_view);
