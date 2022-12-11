import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see text:
 *
 * ```gherkin
 * Then I see text {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see text "Hello, world!"
 * ```
 *
 * @remarks
 *
 * This asserts that the text _exists_ and is _visible_ in the screen.
 */
export function Then_I_see_text(text: string) {
  cy.contains(text).should('exist').and('be.visible');
}

Then('I see text {string}', Then_I_see_text);

/**
 * Then I do not see text:
 *
 * ```gherkin
 * Then I do not see text {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I do not see text "I do not exist"
 * ```
 *
 * @remarks
 *
 * This asserts that the text _does not exist_ in the screen.
 */
export function Then_I_do_not_see_text(text: string) {
  cy.contains(text).should('not.exist');
}

Then('I do not see text {string}', Then_I_do_not_see_text);
