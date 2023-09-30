import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';

/**
 * When I find elements by alt text:
 *
 * ```gherkin
 * When I find elements by alt text {string}
 * ```
 *
 * Finds elements (e.g., `<img>`) that match the `alt` text.
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
 * When I find elements by alt text "Text"
 *   And I get 1st element
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByAltText](https://testing-library.com/docs/queries/byalttext).
 *
 * @see
 *
 * - {@link When_I_find_element_by_alt_text | When I find element by alt text}
 * - {@link When_I_find_images_by_alt_text | When I find images by alt text}
 */
export function When_I_find_elements_by_alt_text(altText: string) {
  setCypressElement(cy.get(`[alt='${altText}']:visible`));
}

When('I find elements by alt text {string}', When_I_find_elements_by_alt_text);

/**
 * When I find images by alt text:
 *
 * ```gherkin
 * When I find images by alt text {string}
 * ```
 *
 * Finds all `<img>` that match the `alt` text.
 *
 * @example
 *
 * ```gherkin
 * When I find images by alt text "Text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_click | "When I click"}. For example:
 *
 * ```gherkin
 * When I find images by alt text "Text"
 *   And I get 1st element
 *   And I click
 * ```
 *
 * Inspired by Testing Library's [ByAltText](https://testing-library.com/docs/queries/byalttext).
 *
 * @see
 *
 * - {@link When_I_find_elements_by_alt_text | When I find elements by alt text}
 * - {@link When_I_find_image_by_alt_text | When I find image by alt text}
 */
export function When_I_find_images_by_alt_text(altText: string) {
  When_I_find_elements_by_alt_text(altText);
  setCypressElement(getCypressElement().filter('img'));
}

When('I find images by alt text {string}', When_I_find_images_by_alt_text);
