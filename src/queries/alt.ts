import { When } from '@badeball/cypress-cucumber-preprocessor';

import { setCypressElement } from '../utils';

/**
 * When I find element by alt text:
 *
 * ```gherkin
 * When I find element by alt text {string}
 * ```
 *
 * This finds an element (`<img>`) that matches the `alt` text.
 *
 * @example
 *
 * ```gherkin
 * When I find element by alt text "Image Description"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find element by alt text "Image Description"
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByAltText](https://testing-library.com/docs/queries/byalttext).
 */
export function When_I_find_element_by_alt_text(altText: string) {
  setCypressElement(this, cy.get(`[alt='${altText}']`));
}

When('I find element by alt text {string}', When_I_find_element_by_alt_text);
