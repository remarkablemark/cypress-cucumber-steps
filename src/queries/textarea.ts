import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { Element } from '../constants';
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
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find textarea by label text "Comments"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
 *   | pseudoSelector | visible |
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
export function When_I_find_textarea_by_label_text(
  text: string,
  options?: DataTable,
) {
  setCypressElement(getByLabelText(Element.textarea, text, options));
}

When(
  'I find textarea by label text {string}',
  When_I_find_textarea_by_label_text,
);
