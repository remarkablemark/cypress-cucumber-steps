import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I set cookie:
 *
 * ```gherkin
 * When I set cookie {string} to {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I set cookie "cookie_name" to "cookie_value"
 * ```
 *
 * @remarks
 *
 * Sets a browser cookie.
 */
export function When_I_set_cookie(name: string, value: string) {
  cy.setCookie(name, value);
}

When('I set cookie {string} to {string}', When_I_set_cookie);
