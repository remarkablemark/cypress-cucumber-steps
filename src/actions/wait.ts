import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I wait seconds:
 *
 * ```gherkin
 * When I wait {int} seconds
 * ```
 *
 * @example
 *
 * Plural step:
 *
 * ```gherkin
 * When I wait 3 seconds
 * ```
 *
 * Singular step:
 *
 * ```gherkin
 * When I wait 1 second
 * ```
 *
 * @remarks
 *
 * Prefer increasing Cypress config's [`defaultCommandTimeout`](https://docs.cypress.io/guides/core-concepts/retry-ability#Timeouts) instead of relying on [`wait`](https://docs.cypress.io/api/commands/wait).
 *
 * @see
 *
 * - {@link When_I_wait_milliseconds | When I wait milliseconds}
 */
export function When_I_wait_seconds(seconds: number) {
  When_I_wait_milliseconds(seconds * 1000);
}

When('I wait {int} seconds', When_I_wait_seconds);
When('I wait {int} second', When_I_wait_seconds);

/**
 * When I wait milliseconds:
 *
 * ```gherkin
 * When I wait {int} milliseconds
 * ```
 *
 * @example
 *
 * Plural step:
 *
 * ```gherkin
 * When I wait 300 milliseconds
 * ```
 *
 * Singular step:
 *
 * ```gherkin
 * When I wait 1 millisecond
 * ```
 *
 * @remarks
 *
 * Prefer increasing Cypress config's [`defaultCommandTimeout`](https://docs.cypress.io/guides/core-concepts/retry-ability#Timeouts) instead of relying on [`wait`](https://docs.cypress.io/api/commands/wait).
 *
 * @see
 *
 * - {@link When_I_wait_seconds | When I wait seconds}
 */
export function When_I_wait_milliseconds(milliseconds: number) {
  cy.wait(milliseconds);
}

When('I wait {int} milliseconds', When_I_wait_milliseconds);
When('I wait {int} millisecond', When_I_wait_milliseconds);
