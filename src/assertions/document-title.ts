import { Then } from '@badeball/cypress-cucumber-preprocessor';

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
 * @see
 *
 * - {@link Then_I_see_document_title_contains | Then I see document title contains}
 */
export function Then_I_see_document_title(title: string) {
  cy.title().should('equal', title);
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
 * @see
 *
 * - {@link Then_I_see_document_title | Then I see document title}
 */
export function Then_I_see_document_title_contains(title: string) {
  cy.title().should('contain', title);
}

Then(
  'I see document title contains {string}',
  Then_I_see_document_title_contains,
);
