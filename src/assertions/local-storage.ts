import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see local storage item:
 *
 * ```gherkin
 * Then I see local storage item {string}
 * ```
 *
 * Assert local storage item with key **_exists_**.
 *
 * @example
 *
 * ```gherkin
 * Then I see local storage item "key"
 * ```
 */
export function Then_I_see_local_storage_item(key: string) {
  cy.wrap({}).should(() => {
    expect(localStorage.getItem(key)).to.exist;
  });
}

Then('I see local storage item {string}', Then_I_see_local_storage_item);
