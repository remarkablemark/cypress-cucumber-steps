import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I clear local storage:
 *
 * ```gherkin
 * When I clear local storage
 * When I clear local storage {string}
 * ```
 *
 * Clear [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage) data for current domain and subdomain.
 *
 * @example
 *
 * Clear all localStorage:
 *
 * ```gherkin
 * When I clear local storage
 * ```
 *
 * Clear localStorage with the key `appName`:
 *
 * ```gherkin
 * When I clear local storage "appName"
 * ```
 *
 * @remarks
 *
 * Cypress automatically clears all local storage _before_ each test to prevent state from being shared across tests when [test isolation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Isolation) is enabled. You shouldn't need to use this command unless you're using it to clear localStorage inside a single test or test isolation is disabled.
 *
 * @see
 *
 * - {@link When_I_clear_all_local_storage | When I clear all local storage}
 */
export function When_I_clear_local_storage(key?: string) {
  cy.clearLocalStorage(key);
}

When('I clear local storage', When_I_clear_local_storage);
When('I clear local storage {string}', When_I_clear_local_storage);

/**
 * When I clear all local storage:
 *
 * ```gherkin
 * When I clear all local storage
 * ```
 *
 * Clear [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage) data for all origins with which the test has interacted.
 *
 * @example
 *
 * ```gherkin
 * When I clear all local storage
 * ```
 *
 * @remarks
 *
 * Cypress automatically clears all local storage _before_ each test to prevent state from being shared across tests when [test isolation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Isolation) is enabled. You shouldn't need to use this command unless you're using it to clear localStorage inside a single test or test isolation is disabled.
 *
 * @see
 *
 * - {@link When_I_clear_local_storage | When I clear local storage}
 */
export function When_I_clear_all_local_storage() {
  cy.clearAllLocalStorage();
}

When('I clear all local storage', When_I_clear_all_local_storage);

/**
 * When I set local storage item:
 *
 * ```gherkin
 * When I set local storage item {string} to {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I set local storage item "key" to "value"
 * ```
 *
 * @see
 *
 * - {@link When_I_clear_local_storage | When I clear local storage}
 */
export function When_I_set_local_storage_item(key: string, value: string) {
  cy.wrap({}).then(() => {
    localStorage.setItem(key, value);
  });
}

When(
  'I set local storage item {string} to {string}',
  When_I_set_local_storage_item,
);
