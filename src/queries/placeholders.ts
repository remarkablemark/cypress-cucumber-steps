import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';

/* eslint-disable tsdoc/syntax */
/**
 * When I find elements by placeholder text:
 *
 * ```gherkin
 * When I find elements by placeholder text {string}
 * ```
 *
 * > A placeholder is not a good substitute for a label so you should generally use {@link When_I_find_element_by_label_text | "When I find element by label text"} instead.
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
 * When I find elements by placeholder text "Password"
 *   And I get 1st element
 *   And I type "password"
 * ```
 *
 * Inspired by Testing Library's [ByPlaceholderText](https://testing-library.com/docs/queries/byplaceholdertext).
 *
 * @see
 *
 * - {@link When_I_find_element_by_placeholder_text | When I find element by placeholder text}
 * - {@link When_I_find_inputs_by_placeholder_text | When I find inputs by placeholder text}
 */
/* eslint-enable tsdoc/syntax */
export function When_I_find_elements_by_placeholder_text(
  placeholderText: string,
) {
  setCypressElement(cy.get(`[placeholder='${placeholderText}']:visible`));
}

When(
  'I find elements by placeholder text {string}',
  When_I_find_elements_by_placeholder_text,
);

/* eslint-disable tsdoc/syntax */
/**
 * When I find inputs by placeholder text:
 *
 * ```gherkin
 * When I find inputs by placeholder text {string}
 * ```
 *
 * > A placeholder is not a good substitute for a label so you should generally use {@link When_I_find_input_by_label_text | "When I find input by label text"} instead.
 *
 * @example
 *
 * ```gherkin
 * When I find inputs by placeholder text "Text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find inputs by placeholder text "Password"
 *   And I get 1st element
 *   And I type "password"
 * ```
 *
 * Inspired by Testing Library's [ByPlaceholderText](https://testing-library.com/docs/queries/byplaceholdertext).
 *
 * @see
 *
 * - {@link When_I_find_elements_by_placeholder_text | When I find elements by placeholder text}
 * - {@link When_I_find_input_by_placeholder_text | When I find input by placeholder text}
 */
/* eslint-enable tsdoc/syntax */
export function When_I_find_inputs_by_placeholder_text(
  placeholderText: string,
) {
  When_I_find_elements_by_placeholder_text(placeholderText);
  setCypressElement(getCypressElement().filter('input'));
}

When(
  'I find inputs by placeholder text {string}',
  When_I_find_inputs_by_placeholder_text,
);