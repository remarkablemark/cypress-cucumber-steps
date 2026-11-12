import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I set environment variable:
 *
 * ```gherkin
 * When I set environment variable {string} to {string}
 * ```
 *
 * @example
 *
 * Set environment variable `host` to `http://server.dev.local`:
 *
 * ```gherkin
 * When I set evironment variable "host" to "http://server.dev.local"
 * ```
 *
 * @remarks
 *
 * **_Security considerations_**
 *
 * [Cypress.expose()](https://docs.cypress.io/api/cypress-api/expose) is intended for **public/non-sensitive** configuration values only. Values set with [Cypress.expose()](https://docs.cypress.io/api/cypress-api/expose) are accessible in the browser context, including to application code, third-party scripts, and browser extensions.
 *
 * **Do NOT** store sensitive data (API keys, passwords, tokens, etc.) using [Cypress.expose()](https://docs.cypress.io/api/cypress-api/expose). Use [cy.env()](https://docs.cypress.io/api/commands/env) for sensitive values.
 */
export function When_I_set_environment_variable(key: string, value: string) {
  Cypress.expose(key, value);
}

When(
  'I set environment variable {string} to {string}',
  When_I_set_environment_variable,
);
