import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * Then I see response status code:
 *
 * ```gherkin
 * Then I see response status {int}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see response status 200
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_make_a_request | "When I make a request"} is required. For example:
 *
 * ```gherkin
 * When I make a "POST" request to "/api"
 * Then I see response status 200
 * ```
 */
export function Then_I_see_response_status(code: number) {
  getCypressElement().should((response: Cypress.Response<object>) => {
    expect(response.status).to.eq(code);
  });
}

Then('I see response status {int}', Then_I_see_response_status);
