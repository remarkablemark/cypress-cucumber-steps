import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { PseudoSelector } from '../constants';
import { getLabelElements, setCypressElement } from '../utils';

/**
 * When I find elements by label text:
 *
 * ```gherkin
 * When I find elements by label text {string}
 * ```
 *
 * Find all visible `label`, `aria-labelledby`, or `aria-label` that matches the text.
 *
 * @example
 *
 * ```gherkin
 * When I find elements by label text "Email"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find elements by label text "Email"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
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
export function When_I_find_elements_by_label_text(
  text: string,
  options?: DataTable,
) {
  setCypressElement(getLabelElements(text, PseudoSelector.visible, options));
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
 * Find the first visible `label`, `aria-labelledby`, or `aria-label` that matches the text.
 *
 * @example
 *
 * ```gherkin
 * When I find element by label text "Email"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/get#Arguments):
 *
 * ```gherkin
 * When I find element by label text "Email"
 *   | log | true |
 *   | timeout | 4000 |
 *   | withinSubject | null |
 *   | includeShadowDom | false |
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
export function When_I_find_element_by_label_text(
  text: string,
  options?: DataTable,
) {
  setCypressElement(
    getLabelElements(text, PseudoSelector.visible, options).first(),
  );
}

When(
  'I find element by label text {string}',
  When_I_find_element_by_label_text,
);
