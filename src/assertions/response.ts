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
    expect(response.status).to.equal(code);
  });
}

Then('I see response status {int}', Then_I_see_response_status);

/**
 * Then I see response body:
 *
 * ```gherkin
 * Then I see response body {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see response body "OK
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_make_a_request | "When I make a request"} is required. For example:
 *
 * ```gherkin
 * When I make a "GET" request to "/user.json"
 * Then I see response body '{"name":"Mark"}'
 * ```
 */
export function Then_I_see_response_body(body: string) {
  getCypressElement().should((response: Cypress.Response<object>) => {
    if (typeof response.body === 'object') {
      expect(response.body).to.eql(JSON.parse(body));
    } else {
      expect(response.body).to.equal(body);
    }
  });
}

Then('I see response body {string}', Then_I_see_response_body);
