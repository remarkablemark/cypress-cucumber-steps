import { Then } from '@badeball/cypress-cucumber-preprocessor';

import {
  When_I_find_button_by_text,
  When_I_find_buttons_by_text,
} from '../queries';
import { getCypressElement } from '../utils';

/**
 * Then I see button:
 *
 * ```gherkin
 * Then I see button {string}
 * ```
 *
 * Assert button with text **_exists_** and is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see button "Button"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_button(text: string) {
  When_I_find_button_by_text(text);
  getCypressElement().should('exist');
}

Then('I see button {string}', Then_I_see_button);

/**
 * Then I do not see button:
 *
 * ```gherkin
 * Then I do not see button {string}
 * ```
 *
 * Assert button with text **_does not exist_** in the screen.
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
  When_I_find_buttons_by_text(text);
  getCypressElement().should('not.exist');
}

Then('I do not see button {string}', Then_I_do_not_see_button);
