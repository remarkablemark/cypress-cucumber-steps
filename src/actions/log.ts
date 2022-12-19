import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I log:
 *
 * ```gherkin
 * When I log {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I log "Hello, world!"
 * ```
 *
 * @remarks
 *
 * Prints a message to the Cypress Command Log.
 */
export function When_I_log(message: string) {
  cy.log(message);
}

When('I log {string}', When_I_log);
