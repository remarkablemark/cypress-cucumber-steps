import { Then } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElementByLabelText } from '../utils';

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
 * This asserts that a label with text **_exists_** and is **_visible_** in the screen.
 *
 * Inspired by Testing Library's [ByLabelText](https://testing-library.com/docs/queries/bylabeltext).
 *
 * @see
 *
 * - {@link Then_I_see_text | Then I see text}
 */
export function Then_I_see_label(text: string) {
  setCypressElementByLabelText(text).then(() =>
    getCypressElement().should('exist')
  );
}

Then('I see label {string}', Then_I_see_label);
