import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

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
 * When I find element by placeholder text "Placeholder"
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
  placeholderText: string
) {
  setCypressElement(
    cy.get(`[placeholder='${placeholderText}']:visible`).first()
  );
}

When(
  'I find element by placeholder text {string}',
  When_I_find_element_by_placeholder_text
);
