import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I blur:
 *
 * ```gherkin
 * When I blur
 * ```
 *
 * Blurs the element with focus.
 *
 * @example
 *
 * ```gherkin
 * When I blur
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_input_by_label_text | "When I find input by label text"} is required. For example:
 *
 * ```gherkin
 * When I find input by label text "Text"
 *   And I blur
 * ```
 */
export function When_I_blur() {
  cy.focused().blur();
}

When('I blur', When_I_blur);
