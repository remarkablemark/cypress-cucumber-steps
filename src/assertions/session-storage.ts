import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see session storage item:
 *
 * ```gherkin
 * Then I see session storage item {string}
 * ```
 *
 * Assert session storage item **_exists_**.
 *
 * @example
 *
 * ```gherkin
 * Then I see session storage item "key"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_session_storage_item_equals | Then I see session storage item equals}
 * - {@link Then_I_do_not_see_session_storage_item | Then I do not see session storage item}
 */
export function Then_I_see_session_storage_item(key: string) {
  cy.wrap({}).should(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(sessionStorage.getItem(key)).to.exist;
  });
}

Then('I see session storage item {string}', Then_I_see_session_storage_item);

/**
 * Then I see session storage item equals:
 *
 * ```gherkin
 * Then I see session storage item {string} equals {string}
 * ```
 *
 * Assert session storage item has exact value.
 *
 * @example
 *
 * ```gherkin
 * Then I see session storage item "key" equals "value"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_session_storage_item_contains | Then I see session storage item contains}
 * - {@link Then_I_see_session_storage_item | Then I see session storage item}
 */
export function Then_I_see_session_storage_item_equals(
  key: string,
  value: string,
) {
  cy.wrap({}).should(() => {
    expect(sessionStorage.getItem(key)).to.equal(value);
  });
}

Then(
  'I see session storage item {string} equals {string}',
  Then_I_see_session_storage_item_equals,
);

/**
 * Then I see session storage item contains:
 *
 * ```gherkin
 * Then I see session storage item {string} contains {string}
 * ```
 *
 * Assert session storage item has partial value.
 *
 * @example
 *
 * ```gherkin
 * Then I see session storage item "key" contains "value"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_session_storage_item_equals | Then I see session storage item equals}
 * - {@link Then_I_see_session_storage_item | Then I see session storage item}
 */
export function Then_I_see_session_storage_item_contains(
  key: string,
  value: string,
) {
  cy.wrap({}).should(() => {
    expect(sessionStorage.getItem(key)).to.contain(value);
  });
}

Then(
  'I see session storage item {string} contains {string}',
  Then_I_see_session_storage_item_contains,
);

/**
 * Then I do not see session storage item:
 *
 * ```gherkin
 * Then I do not see session storage item {string}
 * ```
 *
 * Assert session storage item **_does not exist_**.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see session storage item "key"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_session_storage_item | Then I see session storage item}
 */
export function Then_I_do_not_see_session_storage_item(key: string) {
  cy.wrap({}).should(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(sessionStorage.getItem(key)).to.not.exist;
  });
}

Then(
  'I do not see session storage item {string}',
  Then_I_do_not_see_session_storage_item,
);
