import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../utils';

/**
 * When I intercept URL:
 *
 * ```gherkin
 * When I intercept URL {string}
 * ```
 *
 * Stub [network requests](https://docs.cypress.io/guides/guides/network-requests) and responses.
 *
 * @example
 *
 * Intercept HTTP request and stub response body:
 *
 * ```gherkin
 * When I intercept URL "/api/users/1"
 *   | body | {"name":"Mark"} |
 * ```
 *
 * With [routeMatcher](https://docs.cypress.io/api/commands/intercept#Icon-nameangle-right--routeMatcher-RouteMatcher) options:
 *
 * ```gherkin
 * When I intercept URL "/api/users/1"
 *   | auth | {"username":"user","password":"pass"} |
 *   | body | {"name":"Mark"} |
 *   | headers | {"X-Requested-With":"exampleClient"} |
 *   | hostname | localhost |
 *   | https | true |
 *   | method | GET |
 *   | middleware | false |
 *   | path | /api/commands/intercept?foo=bar |
 *   | pathname | /api/commands/intercept |
 *   | port | 8080 |
 *   | query | {"foo":"bar"} |
 *   | resourceType | fetch |
 *   | times | 1 |
 * ```
 *
 * [routeMatcher](https://docs.cypress.io/api/commands/intercept#Icon-nameangle-right--routeMatcher-RouteMatcher) options:
 *
 * | Option | Description |
 * | --- | --- |
 * | auth | HTTP Basic Authentication (`object` with keys `username` and `password`) |
 * | body | HTTP response body (`object` or `string`) |
 * | headers | HTTP request headers (`object`) |
 * | hostname | HTTP request hostname |
 * | https | `true`: only secure (https://) requests, `false`: only insecure (http://) requests |
 * | method | HTTP request method (matches any method by default) |
 * | middleware | `true`: match route first and in defined order, `false`: match route in reverse order (default) |
 * | path | HTTP request path after the hostname, including query parameters |
 * | pathname | Like path, but without query parameters |
 * | port | HTTP request port(s) (`number` or `Array`) |
 * | query | Parsed query string (`object`) |
 * | resourceType | The resource type of the request. See ["Request object properties"](https://docs.cypress.io/api/commands/intercept#Request-object-properties) for a list of possible values for resourceType. |
 * | times | Maximum number of times to match (number) |
 *
 * @remarks
 *
 * All intercepts are automatically cleared before every test.
 *
 * @see
 *
 * - {@link When_I_intercept_URL_and_stub_body | When I intercept URL and stub body}
 */
export function When_I_intercept_URL(url: string, routeMatcher?: DataTable) {
  cy.intercept(url, getOptions(routeMatcher) as object);
}

When('I intercept URL {string}', When_I_intercept_URL);

/**
 * When I intercept URL and stub body:
 *
 * ```gherkin
 * When I intercept URL {string} and stub body {string}
 * ```
 *
 * @example
 *
 * Intercept HTTP request and stub body with JSON:
 *
 * ```gherkin
 * When I intercept URL "/api/users/1" and stub body '{"name":"Mark"}'
 * ```
 *
 * Intercept HTTP request and stub body with text:
 *
 * ```gherkin
 * When I intercept URL "/page" and stub body "Text"
 * ```
 *
 * @remarks
 *
 * All intercepts are automatically cleared before every test.
 *
 * @see
 *
 * - {@link When_I_intercept_URL | When I intercept URL}
 */
export function When_I_intercept_URL_and_stub_body(url: string, body: string) {
  try {
    body = JSON.parse(body);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // pass
  }
  cy.intercept(url, { body });
}

When(
  'I intercept URL {string} and stub body {string}',
  When_I_intercept_URL_and_stub_body,
);
