import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { When_I_find_elements_by_label_text } from '../queries';
import { getCypressElement } from '../utils';

/**
 * Then I see label:
 *
 * ```gherkin
 * Then I see label {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * Then I see label "Label"
 * ```
 *
 * @remarks
 *
 * Assert that a label with text **_exists_** and is **_visible_** in the screen.
 *
 * Inspired by Testing Library's [ByLabelText](https://testing-library.com/docs/queries/bylabeltext).
 *
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_label(text: string) {
  When_I_find_elements_by_label_text(text);
  getCypressElement().should('exist');
}

Then('I see label {string}', Then_I_see_label);
