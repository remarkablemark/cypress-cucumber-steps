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
 * > Cypress `baseUrl` must be configured.
 *
 * @remarks
 *
 * This will fail if the page does not respond with a 200 status code:
 *
 * ```gherkin
 * When I visit "/404" # fail
 * ```
 */
/* eslint-enable tsdoc/syntax */
export function When_I_visit_URL(url: string) {
  cy.visit(url);
}

When('I visit {string}', When_I_visit_URL);
