import { When } from '@badeball/cypress-cucumber-preprocessor';

/* eslint-disable tsdoc/syntax */
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
 * > Cypress [`baseUrl`](https://docs.cypress.io/guides/references/configuration#e2e) must be defined for relative URL.
 *
 * @remarks
 *
 * If the page does not respond with a 200 status code, then this step will fail:
 *
 * ```gherkin
 * # fail
 * When I visit "/404"
 * ```
 */
/* eslint-enable tsdoc/syntax */
export function When_I_visit_URL(url: string) {
  cy.visit(url);
}

When('I visit {string}', When_I_visit_URL);
