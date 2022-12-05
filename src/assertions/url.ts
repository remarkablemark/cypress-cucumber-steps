import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see URL:
 *
 * ```gherkin
 * Then I see URL {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see URL "https://example.com/index.html"
 * ```
 *
 * @remarks
 *
 * Cypress [`baseUrl`](https://docs.cypress.io/guides/references/configuration#e2e) will be prepended to the URL (if defined):
 *
 * ```gherkin
 * # baseUrl is 'https://example.com'
 * Then I see URL "/index.html"
 * ```
 */
export function Then_I_see_URL(url: string) {
  cy.location('href').should('equal', (Cypress.config().baseUrl || '') + url);
}

Then('I see URL {string}', Then_I_see_URL);

/**
 * Then I see URL contains:
 *
 * ```gherkin
 * Then I see URL contains {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see URL contains "/index.html"
 * ```
 */
export function Then_I_see_URL_contains(url: string) {
  cy.location('href').should('contain', url);
}

Then('I see URL contains {string}', Then_I_see_URL_contains);
