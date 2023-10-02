import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { When_I_find_button_by_text } from '../queries';
import { getCypressElement } from '../utils';

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
  When_I_find_button_by_text(text);
  getCypressElement().should('exist');
}

Then('I see button {string}', Then_I_see_button);
