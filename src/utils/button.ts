/* eslint-disable tsdoc/syntax */

import { setCypressElement } from '../utils';

/**
 * Set Cypress elements by button text:
 *
 * ```ts
 * setCypressElementsByButtonText('...');
 * ```
 *
 * @example
 *
 * ```ts
 * setCypressElementsByButtonText('Text');
 * ```
 *
 * @see
 *
 * - {@link getCypressElement}
 * - {@link setCypressElement}
 *
 * @param text - Button text.
 * @returns - Cypress element.
 *
 * @private
 */
export function setCypressElementsByButtonText(text: string) {
  const buttons = [
    'button',
    "[type='button']",
    "[type='submit']",
    "[role='button']",
  ];
  const selector1 = buttons
    .map((selector) => `${selector}:contains(${JSON.stringify(text)}):visible`)
    .join(',');
  const selector2 = buttons
    .map((selector) => `${selector}[value=${JSON.stringify(text)}]:visible`)
    .join(',');
  const elements = cy.get(`${selector1},${selector2}`);
  setCypressElement(elements);
  return elements;
}

/**
 * Set Cypress element by button text:
 *
 * ```ts
 * setCypressElementByButtonText('...');
 * ```
 *
 * @example
 *
 * ```ts
 * setCypressElementByButtonText('Text');
 * ```
 *
 * @see
 *
 * - {@link getCypressElement}
 * - {@link setCypressElement}
 *
 * @param text - Button text.
 * @returns - Cypress element.
 *
 * @private
 */
export function setCypressElementByButtonText(text: string) {
  const elements = setCypressElementsByButtonText(text);
  const element = elements.first();
  setCypressElement(element);
  return element;
}
