import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

/**
 * When I find elements by alt text:
 *
 * ```gherkin
 * When I find elements by alt text {string}
 * ```
 *
 * This finds elements (`<img>`) that match the `alt` text.
 *
 * @example
 *
 * ```gherkin
 * When I find elements by alt text "Image Description"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find elements by alt text "Image Description"
 *   And I get 1st element
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByAltText](https://testing-library.com/docs/queries/byalttext).
 *
 * @see
 *
 * - {@link When_I_find_element_by_alt_text | When I find element by alt text}
 */
export function When_I_find_elements_by_alt_text(altText: string) {
  setCypressElement(cy.get(`[alt='${altText}']:visible`));
}

When('I find elements by alt text {string}', When_I_find_elements_by_alt_text);
