import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { camelCase, getCypressElement, getOptions } from '../utils';

/**
 * When I scroll window to position:
 *
 * ```gherkin
 * When I scroll window to {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I scroll window to "top"
 * When I scroll window to "left"
 * When I scroll window to "center"
 * When I scroll window to "right"
 * When I scroll window to "bottom"
 * When I scroll window to "bottom-left"
 * When I scroll window to "bottom-right"
 * When I scroll window to "top-left"
 * When I scroll window to "top-right"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/scrollto#Arguments):
 *
 * ```gherkin
 * When I scroll window to "top"
 *   | duration | 0 |
 *   | easing | swing |
 *   | ensureScrollable | true |
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * _Snapshots don't reflect scroll behavior._ To see the scrolling behavior in action, use {@link When_I_pause | "When I pause"}:
 *
 * ```gherkin
 * When I scroll window to "bottom"
 *   And I pause
 * ```
 *
 * @see
 *
 * - {@link When_I_scroll_into_view | When I scroll into view}
 * - {@link When_I_scroll_window_to_x_y_coordinates | When I scroll window to x-y coordinates}
 */
export function When_I_scroll_window_to_position(
  position:
    | 'top'
    | 'left'
    | 'center'
    | 'right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-left'
    | 'top-right',
  options?: DataTable,
) {
  cy.scrollTo(camelCase(position) as Cypress.PositionType, getOptions(options));
}

When('I scroll window to {string}', When_I_scroll_window_to_position);

/**
 * When I scroll window to x-y coordinates:
 *
 * ```gherkin
 * When I scroll window to {int}px and {int}px
 * ```
 *
 * @example
 *
 * Scroll the window 500px down:
 *
 * ```gherkin
 * When I scroll window to 0px and 500px
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/scrollto#Arguments):
 *
 * ```gherkin
 * When I scroll window to 100px and 200px
 *   | duration | 0 |
 *   | easing | swing |
 *   | ensureScrollable | true |
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * _Snapshots don't reflect scroll behavior._ To see the scrolling behavior in action, use {@link When_I_pause | "When I pause"}:
 *
 * ```gherkin
 * When I scroll window to 0px and 500px
 *   And I pause
 * ```
 *
 * @see
 *
 * - {@link When_I_scroll_into_view | When I scroll into view}
 * - {@link When_I_scroll_window_to_position | When I scroll window to position}
 */
export function When_I_scroll_window_to_x_y_coordinates(
  x: number,
  y: number,
  options?: DataTable,
) {
  cy.scrollTo(x, y, getOptions(options));
}

When(
  'I scroll window to {int}px and {int}px',
  When_I_scroll_window_to_x_y_coordinates,
);

/**
 * When I scroll to position:
 *
 * ```gherkin
 * When I scroll to {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I scroll to "top"
 * When I scroll to "left"
 * When I scroll to "center"
 * When I scroll to "right"
 * When I scroll to "bottom"
 * When I scroll to "bottom-left"
 * When I scroll to "bottom-right"
 * When I scroll to "top-left"
 * When I scroll to "top-right"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/scrollto#Arguments):
 *
 * ```gherkin
 * When I scroll to "top"
 *   | duration | 0 |
 *   | easing | swing |
 *   | ensureScrollable | true |
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_get_element_by_selector | "When I get element by selector"} is required. For example:
 *
 * ```gherkin
 * When I get element by selector "#scrollable"
 *   And I scroll to "top"
 * ```
 *
 * _Snapshots don't reflect scroll behavior._ To see the scrolling behavior in action, use {@link When_I_pause | "When I pause"}:
 *
 * ```gherkin
 * When I scroll to "bottom"
 *   And I pause
 * ```
 *
 * @see
 *
 * - {@link When_I_scroll_into_view | When I scroll into view}
 * - {@link When_I_scroll_to_x_y_coordinates | When I scroll to x-y coordinates}
 */
export function When_I_scroll_to_position(
  position:
    | 'top'
    | 'left'
    | 'center'
    | 'right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-left'
    | 'top-right',
  options?: DataTable,
) {
  getCypressElement().scrollTo(
    camelCase(position) as Cypress.PositionType,
    getOptions(options),
  );
}

When('I scroll to {string}', When_I_scroll_to_position);

/**
 * When I scroll to x-y coordinates:
 *
 * ```gherkin
 * When I scroll to {int}px and {int}px
 * ```
 *
 * @example
 *
 * Scroll the element 500px down:
 *
 * ```gherkin
 * When I scroll to 0px and 500px
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/scrollto#Arguments):
 *
 * ```gherkin
 * When I scroll to 100px and 200px
 *   | duration | 0 |
 *   | easing | swing |
 *   | ensureScrollable | true |
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_get_element_by_selector | "When I get element by selector"} is required. For example:
 *
 * ```gherkin
 * When I get element by selector "#scrollable"
 *   And I scroll to 100px and 200px
 * ```
 *
 * _Snapshots don't reflect scroll behavior._ To see the scrolling behavior in action, use {@link When_I_pause | "When I pause"}:
 *
 * ```gherkin
 * When I scroll to 0px and 500px
 *   And I pause
 * ```
 *
 * @see
 *
 * - {@link When_I_scroll_into_view | When I scroll into view}
 * - {@link When_I_scroll_to_position | When I scroll to position}
 */
export function When_I_scroll_to_x_y_coordinates(
  x: number,
  y: number,
  options?: DataTable,
) {
  getCypressElement().scrollTo(x, y, getOptions(options));
}

When('I scroll to {int}px and {int}px', When_I_scroll_to_x_y_coordinates);
