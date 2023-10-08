import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getByLabelText, setCypressElement } from '../utils';

/**
 * When I find textarea by label text:
 *
 * ```gherkin
 * When I find textarea by label text {string}
 * ```
 *
 * Finds the first textarea element that matches the label text.
 *
 * @example
 *
 * ```gherkin
 * When I find textarea by label text "Comments"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find textarea by label text "Comments"
 *   And I type "Lorem ipsum"
 * ```
 *
 * Inspired by Testing Library's [ByLabelText](https://testing-library.com/docs/queries/bylabeltext).
 *
 * @see
 *
 * - {@link When_I_find_element_by_label_text | When I find element by label text }
 */
export function When_I_find_textarea_by_label_text(text: string) {
  setCypressElement(getByLabelText('textarea', text));
}

When(
  'I find textarea by label text {string}',
  When_I_find_textarea_by_label_text,
);
