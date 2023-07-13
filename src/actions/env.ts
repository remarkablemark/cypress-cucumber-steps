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
 * **Scope**
 *
 * Environment variables set using `Cypress.env` _are only in scope for the current spec file_.
 *
 * Cypress runs each spec file in isolation: the browser is exited between specs. Environment variables added or changed in one spec won't be visible in other specs.
 *
 * **Difference between OS-level and Cypress environment variables**
 *
 * In Cypress, "environment variables" are variables that are accessible via `Cypress.env`. These are not the same as OS-level environment variables. However, **it is possible to set Cypress environment variables from OS-level environment variables**.
 */
export function When_I_set_environment_variable(key: string, value: string) {
  Cypress.env(key, value);
}

When(
  'I set environment variable {string} to {string}',
  When_I_set_environment_variable,
);
