import { DataTable, Then } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getButtonElements } from '../utils';

/**
 * Then I see button:
 *
 * ```gherkin
 * Then I see button {string}
 * ```
 *
 * Asserts button with text **_exists_** and is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see button "Button"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * Then I see button "Button"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_button(text: string, options?: DataTable) {
  getButtonElements(text, PseudoSelector.visible, options).should('exist');
}

Then('I see button {string}', Then_I_see_button);

/**
 * Then I do not see button:
 *
 * ```gherkin
 * Then I do not see button {string}
 * ```
 *
 * Asserts button with text **_does not exist_** or **_is not visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see button "Button"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * Then I do not see button "Button"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 * ```
 *
 * @see
 *
 * - {@link Then_I_do_not_see_text | Then I do not see text}
 */
export function Then_I_do_not_see_button(text: string, options?: DataTable) {
  getButtonElements(text, PseudoSelector.visible, options).should('not.exist');
}

Then('I do not see button {string}', Then_I_do_not_see_button);
