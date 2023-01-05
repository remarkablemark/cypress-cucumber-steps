import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see heading:
 *
 * ```gherkin
 * Then I see heading {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see heading "Heading"
 * ```
 *
 * @remarks
 *
 * This asserts that a heading (`h1`, `h2`, `h3`, `h4`, `h5`, or `h6`) with text **_exists_** and is **_visible_** in the screen.
 *
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_heading(text: string) {
  const selector = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    .map((tag) => `${tag}:contains('${text}'):visible`)
    .join(',');
  cy.get(selector).should('exist');
}

Then('I see heading {string}', Then_I_see_heading);
