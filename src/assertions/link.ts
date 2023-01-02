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
 * Then I see link "Link"
 * ```
 *
 * @remarks
 *
 * This asserts that a link with text **_exists_** and is **_visible_** in the screen.
 *
 * @see
 *
 * - {@link Then_I_see_button | Then I see button}
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_link(text: string) {
  cy.contains('a:visible', text).should('exist');
}

Then('I see link {string}', Then_I_see_link);
