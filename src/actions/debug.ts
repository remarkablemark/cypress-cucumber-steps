import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

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
 * _Developer Tools need to be open for `debug` to hit the breakpoint._
 *
 * @see
 *
 * - {@link When_I_pause | When I pause}
 */
export async function When_I_debug() {
  try {
    getCypressElement().debug();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    cy.debug();
  }
}

When('I debug', When_I_debug);
