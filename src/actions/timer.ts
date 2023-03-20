import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I use fake timers:
 *
 * ```gherkin
 * When I use fake timers
 * ```
 *
 * @example
 *
 * Enable fake timers and set system time to Unix epoch:
 *
 * ```gherkin
 * When I use fake timers
 * ```
 *
 * @remarks
 *
 * Overrides native global functions related to time allowing them to be controlled synchronously. This includes controlling:
 *
 * - `setTimeout`
 * - `clearTimeout`
 * - `setInterval`
 * - `clearInterval`
 * - `Date`
 *
 * The clock starts at the Unix epoch (timestamp of 0). This means that when you instantiate `new Date` in your application, it will have a time of `January 1st, 1970`.
 *
 * @see
 *
 * - {@link When_I_use_real_timers | When I use real timers}
 */
export function When_I_use_fake_timers() {
  cy.clock();
}

When('I use fake timers', When_I_use_fake_timers);

/**
 * When I use real timers:
 *
 * ```gherkin
 * When I use real timers
 * ```
 *
 * Restores timers to their normal behavior.
 *
 * @example
 *
 * Restore the clock and allow your application to resume normally without manipulating native global functions related to time:
 *
 * ```gherkin
 * When I use real timers
 * ```
 *
 * @remarks
 *
 * This is automatically called between tests, so should not generally be needed.
 *
 * @see
 *
 * - {@link When_I_use_fake_timers | When I use fake timers}
 */
export function When_I_use_real_timers() {
  cy.clock().invoke('restore');
}

When('I use real timers', When_I_use_real_timers);
