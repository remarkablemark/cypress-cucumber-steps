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
 * - {@link When_I_set_system_time | When I set system time}
 * - {@link When_I_advance_timers_by_milliseconds | When I advance timers by milliseconds}
 * - {@link When_I_advance_timers_by_seconds | When I advance timers by seconds}
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

/**
 * When I set system time:
 *
 * ```gherkin
 * When I set system time to {int}
 * When I set system time to {string}
 * ```
 *
 * @example
 *
 * Change current system time to Unix epoch:
 *
 * ```gherkin
 * When I set system time to 0
 * ```
 *
 * Change current system time to `2020-02-02`:
 *
 * ```gherkin
 * When I set system time to "2020-02-02"
 * ```
 *
 * @remarks
 *
 * A preceding step {@link When_I_use_fake_timers | "When I use fake timers"} is required. For example:
 *
 * ```gherkin
 * When I use fake timers
 *   And I set system time to "2020-02-02"
 * ```
 */
export function When_I_set_system_time(now: number | string) {
  if (typeof now === 'string') {
    now = new Date(now).getTime();
  }
  cy.clock().invoke('setSystemTime', now);
}

When('I set system time to {int}', When_I_set_system_time);
When('I set system time to {string}', When_I_set_system_time);

/**
 * When I advance timers by milliseconds:
 *
 * ```gherkin
 * When I advance timers by {int} milliseconds
 * ```
 *
 * Moves the clock the specified number of `milliseconds`. Any timers within the affected range of time will be called.
 *
 * @example
 *
 * Tick the clock time by 300 milliseconds:
 *
 * ```gherkin
 * When I advance timers by 300 milliseconds
 * ```
 *
 * Tick the clock time by 1 millisecond:
 *
 * ```gherkin
 * When I advance timers by 1 millisecond
 * ```
 *
 * @remarks
 *
 * A preceding step {@link When_I_use_fake_timers | "When I use fake timers"} is required. For example:
 *
 * ```gherkin
 * When I use fake timers
 *   And I advance timers by 300 milliseconds
 * ```
 *
 * @see
 *
 * - {@link When_I_advance_timers_by_seconds | When I advance timers by seconds}
 */
export function When_I_advance_timers_by_milliseconds(milliseconds: number) {
  cy.tick(milliseconds);
}

When(
  'I advance timers by {int} milliseconds',
  When_I_advance_timers_by_milliseconds,
);
When(
  'I advance timers by {int} millisecond',
  When_I_advance_timers_by_milliseconds,
);

/**
 * When I advance timers by seconds:
 *
 * ```gherkin
 * When I advance timers by {int} seconds
 * ```
 *
 * Moves the clock the specified number of `seconds`. Any timers within the affected range of time will be called.
 *
 * @example
 *
 * Tick the clock time by 3 seconds:
 *
 * ```gherkin
 * When I advance timers by 3 seconds
 * ```
 *
 * Tick the clock time by 1 second:
 *
 * ```gherkin
 * When I advance timers by 1 second
 * ```
 *
 * @remarks
 *
 * A preceding step {@link When_I_use_fake_timers | "When I use fake timers"} is required. For example:
 *
 * ```gherkin
 * When I use fake timers
 *   And I advance timers by 3 seconds
 * ```
 *
 * @see
 *
 * - {@link When_I_advance_timers_by_milliseconds | When I advance timers by milliseconds}
 */
export function When_I_advance_timers_by_seconds(seconds: number) {
  cy.tick(seconds * 1000);
}

When('I advance timers by {int} seconds', When_I_advance_timers_by_seconds);
When('I advance timers by {int} second', When_I_advance_timers_by_seconds);
