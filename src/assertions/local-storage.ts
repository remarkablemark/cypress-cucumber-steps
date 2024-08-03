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
 *
 * @see
 *
 * - {@link Then_I_see_local_storage_item_equals | Then I see local storage item equals}
 * - {@link Then_I_do_not_see_local_storage_item | Then I do not see local storage item}
 */
export function Then_I_see_local_storage_item(key: string) {
  cy.wrap({}).should(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(localStorage.getItem(key)).to.exist;
  });
}

Then('I see local storage item {string}', Then_I_see_local_storage_item);

/**
 * Then I see local storage item equals:
 *
 * ```gherkin
 * Then I see local storage item {string} equals {string}
 * ```
 *
 * Assert local storage item has exact value.
 *
 * @example
 *
 * ```gherkin
 * Then I see local storage item "key" equals "value"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_local_storage_item_contains | Then I see local storage item contains}
 * - {@link Then_I_see_local_storage_item | Then I see local storage item}
 */
export function Then_I_see_local_storage_item_equals(
  key: string,
  value: string,
) {
  cy.wrap({}).should(() => {
    expect(localStorage.getItem(key)).to.equal(value);
  });
}

Then(
  'I see local storage item {string} equals {string}',
  Then_I_see_local_storage_item_equals,
);

/**
 * Then I see local storage item contains:
 *
 * ```gherkin
 * Then I see local storage item {string} contains {string}
 * ```
 *
 * Assert local storage item has partial value.
 *
 * @example
 *
 * ```gherkin
 * Then I see local storage item "key" contains "value"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_local_storage_item_equals | Then I see local storage item equals}
 * - {@link Then_I_see_local_storage_item | Then I see local storage item}
 */
export function Then_I_see_local_storage_item_contains(
  key: string,
  value: string,
) {
  cy.wrap({}).should(() => {
    expect(localStorage.getItem(key)).to.contain(value);
  });
}

Then(
  'I see local storage item {string} contains {string}',
  Then_I_see_local_storage_item_contains,
);

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
 *
 * @see
 *
 * - {@link Then_I_see_local_storage_item | Then I see local storage item}
 */
export function Then_I_do_not_see_local_storage_item(key: string) {
  cy.wrap({}).should(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(localStorage.getItem(key)).to.not.exist;
  });
}

Then(
  'I do not see local storage item {string}',
  Then_I_do_not_see_local_storage_item,
);
