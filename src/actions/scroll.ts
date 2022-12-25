import { When } from '@badeball/cypress-cucumber-preprocessor';

import { camelCase, getCypressElement } from '../utils';

/**
 * When I scroll element into view:
 *
 * ```gherkin
 * When I scroll into view
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I scroll into view
 * ```
 *
 * @remarks
 *
 * This requires a preceding step like {@link When_I_find_element_by_text | "When I find element by text"}. For example:
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
export function When_I_scroll_into_view() {
  getCypressElement(this).scrollIntoView();
}

When('I scroll into view', When_I_scroll_into_view);

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
    | 'top-right'
) {
  cy.scrollTo(camelCase(position) as Cypress.PositionType);
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
export function When_I_scroll_window_to_x_y_coordinates(x: number, y: number) {
  cy.scrollTo(x, y);
}

When(
  'I scroll window to {int}px and {int}px',
  When_I_scroll_window_to_x_y_coordinates
);
