import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../utils';

/**
 * Then I see document title:
 *
 * ```gherkin
 * Then I see document title {string}
 * ```
 *
 * @example
 *
 * Assert that the `document.title` property of the page is "Title":
 *
 * ```gherkin
 * Then I see document title "Title"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/title#Arguments):
 *
 * ```gherkin
 * Then I see document title "Title"
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_document_title_contains | Then I see document title contains}
 */
export function Then_I_see_document_title(title: string, options?: DataTable) {
  cy.title(getOptions(options)).should('equal', title);
}

Then('I see document title {string}', Then_I_see_document_title);

/**
 * Then I see document title contains:
 *
 * ```gherkin
 * Then I see document title contains {string}
 * ```
 *
 * @example
 *
 * Assert that the document's title contains "Title":
 *
 * ```gherkin
 * Then I see document title contains "Title"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/title#Arguments):
 *
 * ```gherkin
 * Then I see document title contains "Title"
 *   | log | true |
 *   | timeout | 4000 |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_document_title | Then I see document title}
 */
export function Then_I_see_document_title_contains(
  title: string,
  options?: DataTable,
) {
  cy.title(getOptions(options)).should('contain', title);
}

Then(
  'I see document title contains {string}',
  Then_I_see_document_title_contains,
);
