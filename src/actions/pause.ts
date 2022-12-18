import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I pause:
 *
 * ```gherkin
 * When I pause
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I pause
 * ```
 *
 * @remarks
 *
 * Stops `cy` commands from running and allows interaction with the application under test.
 *
 * @see
 *
 * - {@link When_I_debug | When I debug}
 */
export function When_I_pause() {
  cy.pause();
}

When('I pause', When_I_pause);
