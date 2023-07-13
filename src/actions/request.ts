import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions, setCypressElement } from '../utils';

/**
 * When I make an HTTP [request](https://docs.cypress.io/api/commands/request):
 *
 * ```gherkin
 * When I make a {string} request to {string}
 * ```
 *
 * @example
 *
 * Make a `GET` request to `http://dev.local/seed`:
 *
 * ```gherkin
 * When I make a "GET" request to "http://dev.local/seed"
 * ```
 *
 * Make an `OPTIONS` request to `/api`:
 *
 * ```gherkin
 * When I make an "OPTIONS" request to "/api"
 * ```
 *
 * @remarks
 *
 * If you make a request after visiting a page, Cypress assumes the URL used for the visit is the host:
 *
 * ```gherkin
 * When I visit "http://localhost:8080/app"
 *   And I make a "POST" request to "users/1.json"
 *   # URL is http://localhost:8080/users/1.json
 * ```
 *
 * If you make a request prior to visiting a page, Cypress assumes the host is the `baseUrl` property configured inside of of your [configuration file](https://docs.cypress.io/guides/references/configuration#e2e).
 */
export function When_I_make_a_request(
  method:
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'PATCH'
    | 'HEAD'
    | 'OPTIONS'
    | 'TRACE'
    | 'COPY'
    | 'LOCK'
    | 'MKCOL'
    | 'MOVE'
    | 'PURGE'
    | 'PROPFIND'
    | 'PROPPATCH'
    | 'UNLOCK'
    | 'REPORT'
    | 'MKACTIVITY'
    | 'CHECKOUT'
    | 'MERGE'
    | 'M-SEARCH'
    | 'NOTIFY'
    | 'SUBSCRIBE'
    | 'UNSUBSCRIBE'
    | 'SEARCH'
    | 'CONNECT',
  url: string,
  options?: DataTable,
) {
  setCypressElement(
    cy.request({
      ...getOptions(options),
      method,
      url,
    }),
  );
}

When('I make a {string} request to {string}', When_I_make_a_request);
When('I make an {string} request to {string}', When_I_make_a_request);
