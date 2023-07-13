import { When } from '@badeball/cypress-cucumber-preprocessor';

/* eslint-disable tsdoc/syntax */
/**
 * When I set Cypress config:
 *
 * ```gherkin
 * When I set Cypress config {string} to {string}
 * ```
 *
 * @example
 *
 * Increase time (in milliseconds) to wait until most DOM based commands are considered [timed out](https://docs.cypress.io/guides/references/configuration#Timeouts):
 *
 * ```gherkin
 * When I set Cypress config "defaultCommandTimeout" to "10000"
 * ```
 *
 * @remarks
 *
 * Configuration set using [`Cypress.config`](https://docs.cypress.io/api/cypress-api/config) _is only in scope for the current spec file_.
 *
 * Cypress runs each spec file in isolation: the browser is exited between specs. Configuration changed in one spec won't be visible in other specs.
 *
 * > Not all configuration values can be changed during runtime.
 *
 * @see
 *
 * See [Cypress configuration options](https://docs.cypress.io/guides/references/configuration#Options).
 */
/* eslint-enable tsdoc/syntax */
export function When_I_set_Cypress_config(
  name: keyof Cypress.TestConfigOverrides,
  value: string,
) {
  switch (value) {
    case 'true':
      Cypress.config(name, true);
      break;

    case 'false':
      Cypress.config(name, false);
      break;

    case 'null':
      Cypress.config(name, null);
      break;

    case 'undefined':
      Cypress.config(name, undefined);
      break;

    default:
      Cypress.config(name, isNaN(Number(value)) ? value : Number(value));
      break;
  }
}

When('I set Cypress config {string} to {string}', When_I_set_Cypress_config);
