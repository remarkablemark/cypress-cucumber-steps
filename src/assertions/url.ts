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
 * With [`baseUrl`](https://docs.cypress.io/guides/references/best-practices#Setting-a-Global-baseUrl) set:
 *
 * ```gherkin
 * Then I see URL "/index.html"
 * ```
 *
 * Without [`baseUrl`](https://docs.cypress.io/guides/references/best-practices#Setting-a-Global-baseUrl) set:
 *
 * ```gherkin
 * Then I see URL "http://localhost:8080/index.html"
 * ```
 */
export function Then_I_see_URL(url: string) {
  cy.url().should('equal', (Cypress.config().baseUrl || '') + url);
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
 * With [`baseUrl`](https://docs.cypress.io/guides/references/best-practices#Setting-a-Global-baseUrl) set:
 *
 * ```gherkin
 * Then I see URL contains "/index.html"
 * ```
 *
 * Without [`baseUrl`](https://docs.cypress.io/guides/references/best-practices#Setting-a-Global-baseUrl) set:
 *
 * ```gherkin
 * Then I see URL contains "http://localhost:8080/index.html"
 * ```
 */
export function Then_I_see_URL_contains(url: string) {
  cy.url().should('contain', url);
}

Then('I see URL contains {string}', Then_I_see_URL_contains);

/**
 * Then I do not see URL:
 *
 * ```gherkin
 * Then I do not see URL {string}
 * ```
 *
 * @example
 *
 * With [`baseUrl`](https://docs.cypress.io/guides/references/best-practices#Setting-a-Global-baseUrl) set:
 *
 * ```gherkin
 * Then I do not see URL "/index.html"
 * ```
 *
 * Without [`baseUrl`](https://docs.cypress.io/guides/references/best-practices#Setting-a-Global-baseUrl) set:
 *
 * ```gherkin
 * Then I do not see URL "http://localhost:8080/index.html"
 * ```
 */
export function Then_I_do_not_see_URL(url: string) {
  cy.url().should('not.equal', (Cypress.config().baseUrl || '') + url);
}

Then('I do not see URL {string}', Then_I_do_not_see_URL);

/**
 * Then I do not see URL contains:
 *
 * ```gherkin
 * Then I do not see URL contains {string}
 * ```
 *
 * @example
 *
 * With [`baseUrl`](https://docs.cypress.io/guides/references/best-practices#Setting-a-Global-baseUrl) set:
 *
 * ```gherkin
 * Then I do not see URL contains "/index.html"
 * ```
 *
 * Without [`baseUrl`](https://docs.cypress.io/guides/references/best-practices#Setting-a-Global-baseUrl) set:
 *
 * ```gherkin
 * Then I do not see URL contains "http://localhost:8080/index.html"
 * ```
 */
export function Then_I_do_not_see_URL_contains(url: string) {
  cy.url().should('not.contain', url);
}

Then('I do not see URL contains {string}', Then_I_do_not_see_URL_contains);
