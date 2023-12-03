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
 * - {@link Then_I_do_not_see_session_storage_item | Then I do not see session storage item}
 */
export function Then_I_see_session_storage_item(key: string) {
  cy.wrap({}).should(() => {
    expect(sessionStorage.getItem(key)).to.exist;
  });
}

Then('I see session storage item {string}', Then_I_see_session_storage_item);

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
    expect(sessionStorage.getItem(key)).to.not.exist;
  });
}

Then(
  'I do not see session storage item {string}',
  Then_I_do_not_see_session_storage_item,
);
