/* eslint-disable tsdoc/syntax */

import { setCypressElement } from '../utils';

/**
 * Set Cypress elements by label text:
 *
 * ```ts
 * setCypressElementsByLabelText('...');
 * ```
 *
 * @example
 *
 * ```ts
 * setCypressElementsByLabelText('Text');
 * ```
 *
 * @see
 *
 * - {@link getCypressElement}
 * - {@link setCypressElement}
 *
 * @param text - Label text.
 * @returns - Cypress element.
 *
 * @private
 */
export function setCypressElementsByLabelText(text: string) {
  const selector = [
    `label:contains(${JSON.stringify(text)})`,
    `[aria-labelledby=${JSON.stringify(text)}]`,
    `[aria-label=${JSON.stringify(text)}]`,
  ].join(',');
  const elements = cy.get(selector).filter(':visible');
  setCypressElement(elements);
  return elements;
}

/**
 * Set Cypress element by label text:
 *
 * ```ts
 * setCypressElementByLabelText('...');
 * ```
 *
 * @example
 *
 * ```ts
 * setCypressElementByLabelText('Text');
 * ```
 *
 * @see
 *
 * - {@link getCypressElement}
 * - {@link setCypressElement}
 *
 * @param text - Label text.
 * @returns - Cypress element.
 *
 * @private
 */
export function setCypressElementByLabelText(text: string) {
  const elements = setCypressElementsByLabelText(text);
  const element = elements.first();
  setCypressElement(element);
  return element;
}
