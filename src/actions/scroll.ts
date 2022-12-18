import { When } from '@badeball/cypress-cucumber-preprocessor';

import { camelCase } from '../utils';

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
 * When I scroll window to {int}, {int}
 * ```
 *
 * @example
 *
 * Scroll the window 500px down:
 *
 * ```gherkin
 * When I scroll window to 0, 500
 * ```
 *
 * @remarks
 *
 * _Snapshots don't reflect scroll behavior._ To see the scrolling behavior in action, use {@link When_I_pause | "When I pause"}:
 *
 * ```gherkin
 * When I scroll window to 0, 500
 *   And I pause
 * ```
 *
 * @see
 *
 * - {@link When_I_scroll_window_to_position | When I scroll window to position}
 */
export function When_I_scroll_window_to_x_y_coordinates(x: number, y: number) {
  cy.scrollTo(x, y);
}

When(
  'I scroll window to {int}, {int}',
  When_I_scroll_window_to_x_y_coordinates
);
