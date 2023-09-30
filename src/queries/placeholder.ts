import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';
import { When_I_find_elements_by_placeholder_text } from './placeholders';

/* eslint-disable tsdoc/syntax */
/**
 * When I find element by placeholder text:
 *
 * ```gherkin
 * When I find element by placeholder text {string}
 * ```
 *
 * > Placeholder is not a good substitute for label so prefer {@link When_I_find_element_by_label_text | "When I find element by label text "} instead.
 *
 * @example
 *
 * ```gherkin
 * When I find element by placeholder text "Text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find element by placeholder text "Password"
 *   And I type "password"
 * ```
 *
 * Inspired by Testing Library's [ByPlaceholderText](https://testing-library.com/docs/queries/byplaceholdertext).
 */
/* eslint-enable tsdoc/syntax */
export function When_I_find_element_by_placeholder_text(
  placeholderText: string,
) {
  When_I_find_elements_by_placeholder_text(placeholderText);
  setCypressElement(getCypressElement().first());
}

When(
  'I find element by placeholder text {string}',
  When_I_find_element_by_placeholder_text,
);
