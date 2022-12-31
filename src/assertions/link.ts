import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see link:
 *
 * ```gherkin
 * Then I see link {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see link "Hello, world!"
 * ```
 *
 * @remarks
 *
 * This asserts that a link with text **_exists_** and is **_visible_** in the screen.
 *
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_link(text: string) {
  cy.contains('a', text).should('exist').and('be.visible');
}

Then('I see link {string}', Then_I_see_link);
