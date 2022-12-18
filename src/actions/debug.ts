import { When } from '@badeball/cypress-cucumber-preprocessor';

/* eslint-disable tsdoc/syntax */
/**
 * When I debug:
 *
 * ```gherkin
 * When I debug
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I debug
 * ```
 *
 * @remarks
 *
 * Sets a `debugger` and logs what the previous command yields.
 *
 * > Developer Tools need to be open for `debug` to hit the breakpoint.
 *
 * @see
 *
 * - {@link When_I_pause | When I pause}
 */
/* eslint-enable tsdoc/syntax */
export function When_I_debug() {
  cy.debug();
}

When('I debug', When_I_debug);
