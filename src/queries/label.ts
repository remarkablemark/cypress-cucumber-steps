import { When } from '@badeball/cypress-cucumber-preprocessor';

import {
  getCypressElement,
  setCypressElement,
  setCypressElementsByLabelText,
} from '../utils';

/**
 * When I find elements by label text:
 *
 * ```gherkin
 * When I find elements by label text {string}
 * ```
 *
 * Finds all `label`, `aria-labelledby`, or `aria-label` that matches the text.
 *
 * @example
 *
 * ```gherkin
 * When I find elements by label text "Email"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find elements by label text "Email"
 *   And I get 1st element
 *   And I type "user@example.com"
 * ```
 *
 * Inspired by Testing Library's [ByLabelText](https://testing-library.com/docs/queries/bylabeltext).
 *
 * @see
 *
 * - {@link When_I_find_element_by_label_text | When I find element by label text }
 */
export function When_I_find_elements_by_label_text(text: string) {
  setCypressElementsByLabelText(text);
}

When(
  'I find elements by label text {string}',
  When_I_find_elements_by_label_text,
);

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
 *
 * @see
 *
 * - {@link When_I_find_elements_by_label_text | When I find elements by label text }
 */
export function When_I_find_element_by_label_text(text: string) {
  When_I_find_elements_by_label_text(text);
  setCypressElement(getCypressElement().first());
}

When(
  'I find element by label text {string}',
  When_I_find_element_by_label_text,
);
