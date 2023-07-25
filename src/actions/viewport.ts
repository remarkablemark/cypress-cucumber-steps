import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I set viewport to [preset](https://docs.cypress.io/api/commands/viewport#Arguments):
 *
 * ```gherkin
 * When I set viewport to {string}
 * ```
 *
 * When I set viewport to preset and orientation:
 *
 * ```gherkin
 * When I set viewport to {string} and {string}
 * ```
 *
 * Preset supports the following options:
 *
 * | Preset | width | height |
 * | --- | --- | --- |
 * | `ipad-2` | 768 | 1024 |
 * | `ipad-mini` | 768 | 1024 |
 * | `iphone-3` | 320 | 480 |
 * | `iphone-4` | 320 | 480 |
 * | `iphone-5` | 320 | 568 |
 * | `iphone-6` | 375 | 667 |
 * | `iphone-6+` | 414 | 736 |
 * | `iphone-7` | 375 | 667 |
 * | `iphone-8` | 375 | 667 |
 * | `iphone-x` | 375 | 812 |
 * | `iphone-xr` | 414 | 896 |
 * | `iphone-se2` | 375 | 667 |
 * | `macbook-11` | 1366 | 768 |
 * | `macbook-13` | 1280 | 800 |
 * | `macbook-15` | 1440 | 900 |
 * | `macbook-16` | 1536 | 960 |
 * | `samsung-note9` | 414 | 846 |
 * | `samsung-s10` | 360 | 760 |
 *
 * The _default orientation_ is `portrait`.
 *
 * @example
 *
 * Resize viewport to iPhone 6 width and height (375px x 667px):
 *
 * ```gherkin
 * When I set viewport to "iphone-6"
 * ```
 *
 * Resize viewport to iPhone 6 width and height and change orientation to landscape:
 *
 * ```gherkin
 * When I set viewport to "iphone-6" and "landscape"
 * ```
 *
 * @remarks
 *
 * Controls the size and orientation of the screen for your application.
 *
 * @see
 *
 * - {@link When_I_set_viewport_width_height | When I set viewport width height}
 */
export function When_I_set_viewport(
  preset:
    | 'ipad-2'
    | 'ipad-mini'
    | 'iphone-3'
    | 'iphone-4'
    | 'iphone-5'
    | 'iphone-6'
    | 'iphone-6+'
    | 'iphone-7'
    | 'iphone-8'
    | 'iphone-x'
    | 'iphone-xr'
    | 'iphone-se2'
    | 'macbook-11'
    | 'macbook-13'
    | 'macbook-15'
    | 'macbook-16'
    | 'samsung-note9'
    | 'samsung-s10',
  orientation: 'portrait' | 'landscape' = 'portrait',
) {
  cy.viewport(preset, orientation);
}

When('I set viewport to {string}', When_I_set_viewport);
When('I set viewport to {string} and {string}', When_I_set_viewport);

/**
 * When I set viewport to width and height:
 *
 * ```gherkin
 * When I set viewport to {int}px by {int}px
 * ```
 *
 * @example
 *
 * Resize viewport to 375px width by 667px height:
 *
 * ```gherkin
 * When I set viewport to 375px by 667px
 * ```
 *
 * @remarks
 *
 * Controls the size and orientation of the screen for your application.
 *
 * @see
 *
 * - {@link When_I_set_viewport | When I set viewport}
 */
export function When_I_set_viewport_width_height(
  width: number,
  height: number,
) {
  cy.viewport(width, height);
}
When('I set viewport to {int}px by {int}px', When_I_set_viewport_width_height);
