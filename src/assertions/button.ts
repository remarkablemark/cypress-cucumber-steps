import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElementsByButtonText } from '../utils';

/**
 * Then I see button:
 *
 * ```gherkin
 * Then I see button {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see button "Button"
 * ```
 *
 * @remarks
 *
 * This asserts that a button with text **_exists_** and is **_visible_** in the screen.
 *
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_button(text: string) {
  setCypressElementsByButtonText(text).should('exist');
}

Then('I see button {string}', Then_I_see_button);

/**
 * Then I do not see button:
 *
 * ```gherkin
 * Then I do not see button {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I do not see button "Button"
 * ```
 *
 * @see
 *
 * - {@link Then_I_do_not_see_text | Then I do not see text}
 */
export function Then_I_do_not_see_button(text: string) {
  setCypressElementsByButtonText(text).should('not.exist');
}

Then('I do not see button {string}', Then_I_do_not_see_button);
