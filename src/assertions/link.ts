import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see link:
 *
 * ```gherkin
 * Then I see link {string}
 * ```
 *
 * Assert link with text **_exists_** and is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see link "Link"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_link(text: string) {
  cy.contains('a:visible', text).should('exist');
}

Then('I see link {string}', Then_I_see_link);

/**
 * Then I do not see link:
 *
 * ```gherkin
 * Then I do not see link {string}
 * ```
 *
 * Assert link with text **_does not exist_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see link "Link"
 * ```
 *
 * @see
 *
 * - {@link Then_I_do_not_see_text | Then I do not see text}
 */
export function Then_I_do_not_see_link(text: string) {
  cy.contains('a:visible', text).should('not.exist');
}

Then('I do not see link {string}', Then_I_do_not_see_link);
