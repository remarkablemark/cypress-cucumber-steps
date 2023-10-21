import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../utils';

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
 *
 * With [options](https://docs.cypress.io/api/commands/url#Arguments):
 *
 * ```gherkin
 * Then I see URL "/"
 *   | decode | false |
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_URL_contains | Then I see URL contains}
 */
export function Then_I_see_URL(url: string, options?: DataTable) {
  url = (Cypress.config().baseUrl || '') + url;
  cy.url(getOptions(options)).should('equal', url);
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
 *
 * With [options](https://docs.cypress.io/api/commands/url#Arguments):
 *
 * ```gherkin
 * Then I see URL contains "/"
 *   | decode | false |
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_URL | Then I see URL}
 */
export function Then_I_see_URL_contains(url: string, options?: DataTable) {
  cy.url(getOptions(options)).should('contain', url);
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
 *
 * With [options](https://docs.cypress.io/api/commands/url#Arguments):
 *
 * ```gherkin
 * Then I do not see URL "/"
 *   | decode | false |
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @see
 *
 * - {@link Then_I_do_not_see_URL_contains | Then I do not see URL contains}
 */
export function Then_I_do_not_see_URL(url: string, options?: DataTable) {
  url = (Cypress.config().baseUrl || '') + url;
  cy.url(getOptions(options)).should('not.equal', url);
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
 *
 * With [options](https://docs.cypress.io/api/commands/url#Arguments):
 *
 * ```gherkin
 * Then I do not see URL contains "/"
 *   | decode | false |
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @see
 *
 * - {@link Then_I_do_not_see_URL | Then I do not see URL}
 */
export function Then_I_do_not_see_URL_contains(
  url: string,
  options?: DataTable,
) {
  cy.url(getOptions(options)).should('not.contain', url);
}

Then('I do not see URL contains {string}', Then_I_do_not_see_URL_contains);
