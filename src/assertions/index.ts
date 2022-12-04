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
 */
export function Then_I_see_text(text: string) {
  cy.contains(text).should('exist');
}

Then('I see text {string}', Then_I_see_text);
