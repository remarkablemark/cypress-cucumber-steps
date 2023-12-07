import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { getOptions } from '../utils';

/**
 * Then I see text:
 *
 * ```gherkin
 * Then I see text {string}
 * ```
 *
 * Assert text **_exists_** and is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see text "Text"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/contains#Arguments):
 *
 * ```gherkin
 * Then I see text "Text"
 *   | matchCase | true |
 *   | log | true |
 *   | timeout | 4000 |
 *   | includeShadowDom | false |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_button | Then I see button}
 * - {@link Then_I_see_heading | Then I see heading}
 * - {@link Then_I_see_label | Then I see label}
 * - {@link Then_I_see_link | Then I see link}
 */
export function Then_I_see_text(text: string, options?: DataTable) {
  cy.contains(text, getOptions(options)).filter(':visible').should('exist');
}

Then('I see text {string}', Then_I_see_text);

/**
 * Then I do not see text:
 *
 * ```gherkin
 * Then I do not see text {string}
 * ```
 *
 * Assert text **_does not exist_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see text "Text"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/contains#Arguments):
 *
 * ```gherkin
 * Then I do not see text "Text"
 *   | matchCase | true |
 *   | log | true |
 *   | timeout | 4000 |
 *   | includeShadowDom | false |
 * ```
 *
 * @see
 *
 * - {@link Then_I_do_not_see_visible_text | Then I do not see visible text}
 * - {@link Then_I_do_not_see_button | Then I do not see button}
 * - {@link Then_I_do_not_see_heading | Then I do not see heading}
 * - {@link Then_I_do_not_see_label | Then I do not see label}
 * - {@link Then_I_do_not_see_link | Then I do not see link}
 */
export function Then_I_do_not_see_text(text: string, options?: DataTable) {
  cy.contains(text, getOptions(options)).should('not.exist');
}

Then('I do not see text {string}', Then_I_do_not_see_text);

/**
 * Then I do not see visible text:
 *
 * ```gherkin
 * Then I do not see visible text {string}
 * ```
 *
 * Assert text **_exists_** in the screen but is **_hidden_**.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see visible text "Text"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/contains#Arguments):
 *
 * ```gherkin
 * Then I do not see visible text "Text"
 *   | matchCase | true |
 *   | log | true |
 *   | timeout | 4000 |
 *   | includeShadowDom | false |
 * ```
 *
 * @see
 *
 * - {@link Then_I_do_not_see_text | Then I do not see text}
 */
export function Then_I_do_not_see_visible_text(
  text: string,
  options?: DataTable,
) {
  cy.contains(text, getOptions(options)).should('not.be.visible');
}

Then('I do not see visible text {string}', Then_I_do_not_see_visible_text);
