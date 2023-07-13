import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElementByLabelText } from '../utils';

/**
 * When I find element by label text:
 *
 * ```gherkin
 * When I find element by label text {string}
 * ```
 *
 * Finds the first `label`, `aria-labelledby`, or `aria-label` that matches the text.
 *
 * @example
 *
 * ```gherkin
 * When I find element by label text "Email"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find element by label text "Email"
 *   And I type "user@example.com"
 * ```
 *
 * Inspired by Testing Library's [ByLabelText](https://testing-library.com/docs/queries/bylabeltext).
 */
export function When_I_find_element_by_label_text(text: string) {
  setCypressElementByLabelText(text);
}

When(
  'I find element by label text {string}',
  When_I_find_element_by_label_text,
);
