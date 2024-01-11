import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../utils';

/**
 * When I visit URL:
 *
 * ```gherkin
 * When I visit {string}
 * ```
 *
 * @example
 *
 * With absolute URL:
 *
 * ```gherkin
 * When I visit "https://example.com/"
 * ```
 *
 * With relative URL:
 *
 * ```gherkin
 * When I visit "/"
 * ```
 *
 * Cypress [`baseUrl`](https://docs.cypress.io/guides/references/configuration#e2e) must be defined for relative URL to work.
 *
 * @remarks
 *
 * If the page does not respond with a `2xx` status code, then this step will fail:
 *
 * ```gherkin
 * When I visit "/404" # fail
 * ```
 *
 * If you don't want status codes to cause failures, then pass the option:
 *
 * ```gherkin
 * When I visit "/404"
 *   | failOnStatusCode | false |
 * ```
 */
export function When_I_visit_URL(url: string, options?: DataTable) {
  cy.visit(url, getOptions(options));
}

When('I visit {string}', When_I_visit_URL);
