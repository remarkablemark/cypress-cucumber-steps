import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see local storage item:
 *
 * ```gherkin
 * Then I see local storage item {string}
 * ```
 *
 * Assert local storage item **_exists_**.
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

/**
 * Then I do not see local storage item:
 *
 * ```gherkin
 * Then I do not see local storage item {string}
 * ```
 *
 * Assert local storage item **_does not exist_**.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see local storage item "key"
 * ```
 */
export function Then_I_do_not_see_local_storage_item(key: string) {
  cy.wrap({}).should(() => {
    expect(localStorage.getItem(key)).to.not.exist;
  });
}

Then(
  'I do not see local storage item {string}',
  Then_I_do_not_see_local_storage_item,
);
