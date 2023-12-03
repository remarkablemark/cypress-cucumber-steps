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
 */
export function Then_I_see_session_storage_item(key: string) {
  cy.wrap({}).should(() => {
    expect(sessionStorage.getItem(key)).to.exist;
  });
}

Then('I see session storage item {string}', Then_I_see_session_storage_item);
