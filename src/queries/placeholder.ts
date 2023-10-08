import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';

/**
 * When I find elements by placeholder text:
 *
 * ```gherkin
 * When I find elements by placeholder text {string}
 * ```
 *
 * _A placeholder is not a good substitute for a label so you should generally use {@link When_I_find_element_by_label_text | "When I find element by label text"} instead._
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
 * When I find elements by placeholder text "Name"
 *   And I get 1st element
 *   And I type "John Smith"
 * ```
 *
 * Inspired by Testing Library's [ByPlaceholderText](https://testing-library.com/docs/queries/byplaceholdertext).
 *
 * @see
 *
 * - {@link When_I_find_element_by_placeholder_text | When I find element by placeholder text}
 */
export function When_I_find_elements_by_placeholder_text(
  placeholderText: string,
) {
  setCypressElement(
    cy.get(`[placeholder=${JSON.stringify(placeholderText)}]:visible`),
  );
}

When(
  'I find elements by placeholder text {string}',
  When_I_find_elements_by_placeholder_text,
);

/**
 * When I find element by placeholder text:
 *
 * ```gherkin
 * When I find element by placeholder text {string}
 * ```
 *
 * _A placeholder is not a good substitute for a label so you should generally use {@link When_I_find_element_by_label_text | "When I find element by label text"} instead._
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
 * When I find element by placeholder text "Name"
 *   And I type "John Smith"
 * ```
 *
 * Inspired by Testing Library's [ByPlaceholderText](https://testing-library.com/docs/queries/byplaceholdertext).
 *
 * @see
 *
 * - {@link When_I_find_elements_by_placeholder_text | When I find elements by placeholder text}
 */
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

/**
 * When I find inputs by placeholder text:
 *
 * ```gherkin
 * When I find inputs by placeholder text {string}
 * ```
 *
 * _A placeholder is not a good substitute for a label so you should generally use {@link When_I_find_input_by_label_text | "When I find input by label text"} instead._
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
 * - {@link When_I_find_input_by_placeholder_text | When I find input by placeholder text}
 */
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

/**
 * When I find input by placeholder text:
 *
 * ```gherkin
 * When I find input by placeholder text {string}
 * ```
 *
 * _A placeholder is not a good substitute for a label so you should generally use {@link When_I_find_input_by_label_text | "When I find input by label text"} instead._
 *
 * @example
 *
 * ```gherkin
 * When I find input by placeholder text "Text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find input by placeholder text "Password"
 *   And I type "password"
 * ```
 *
 * Inspired by Testing Library's [ByPlaceholderText](https://testing-library.com/docs/queries/byplaceholdertext).
 *
 * @see
 *
 * - {@link When_I_find_inputs_by_placeholder_text | When I find inputs by placeholder text}
 */
export function When_I_find_input_by_placeholder_text(placeholderText: string) {
  When_I_find_inputs_by_placeholder_text(placeholderText);
  setCypressElement(getCypressElement().first());
}

When(
  'I find input by placeholder text {string}',
  When_I_find_input_by_placeholder_text,
);

/**
 * When I find textareas by placeholder text:
 *
 * ```gherkin
 * When I find textareas by placeholder text {string}
 * ```
 *
 * _A placeholder is not a good substitute for a label so you should generally use {@link When_I_find_textarea_by_label_text | "When I find textarea by label text"} instead._
 *
 * @example
 *
 * ```gherkin
 * When I find textareas by placeholder text "Text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find textareas by placeholder text "Comments"
 *   And I get 1st element
 *   And I type "Lorem ipsum"
 * ```
 *
 * Inspired by Testing Library's [ByPlaceholderText](https://testing-library.com/docs/queries/byplaceholdertext).
 *
 * @see
 *
 * - {@link When_I_find_textarea_by_placeholder_text | When I find textarea by placeholder text}
 */
export function When_I_find_textareas_by_placeholder_text(
  placeholderText: string,
) {
  When_I_find_elements_by_placeholder_text(placeholderText);
  setCypressElement(getCypressElement().filter('textarea'));
}

When(
  'I find textareas by placeholder text {string}',
  When_I_find_textareas_by_placeholder_text,
);

/**
 * When I find textarea by placeholder text:
 *
 * ```gherkin
 * When I find textarea by placeholder text {string}
 * ```
 *
 * _A placeholder is not a good substitute for a label so you should generally use {@link When_I_find_textarea_by_label_text | "When I find textarea by label text"} instead._
 *
 * @example
 *
 * ```gherkin
 * When I find textarea by placeholder text "Text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find textarea by placeholder text "Comments"
 *   And I type "Lorem ipsum"
 * ```
 *
 * Inspired by Testing Library's [ByPlaceholderText](https://testing-library.com/docs/queries/byplaceholdertext).
 *
 * @see
 *
 * - {@link When_I_find_textareas_by_placeholder_text | When I find textareas by placeholder text}
 */
export function When_I_find_textarea_by_placeholder_text(
  placeholderText: string,
) {
  When_I_find_textareas_by_placeholder_text(placeholderText);
  setCypressElement(getCypressElement().first());
}

When(
  'I find textarea by placeholder text {string}',
  When_I_find_textarea_by_placeholder_text,
);
