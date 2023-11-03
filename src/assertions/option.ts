import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see option:
 *
 * ```gherkin
 * Then I see option {string}
 * ```
 *
 * Assert option with text **_exists_** and is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see option "Option"
 * ```
 */
export function Then_I_see_option(text: string) {
  cy.contains('option:visible', text).should('exist');
}

Then('I see option {string}', Then_I_see_option);

/**
 * Then I do not see option:
 *
 * ```gherkin
 * Then I do not see option {string}
 * ```
 *
 * Assert option with text **_does not exist_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see option "Option"
 * ```
 */
export function Then_I_do_not_see_option(text: string) {
  cy.contains('option:visible', text).should('not.exist');
}

Then('I do not see option {string}', Then_I_do_not_see_option);
