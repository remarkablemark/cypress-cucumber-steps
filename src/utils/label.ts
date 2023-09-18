/* eslint-disable tsdoc/syntax */

import { setCypressElement } from '../utils';

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
 * setCypressElementByLabelText('Label');
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
  const selector = [
    `label:visible:contains('${text}')`,
    `[aria-labelledby='${text}']`,
    `[aria-label='${text}']`,
  ].join(',');
  const label = cy.get(selector).first();
  setCypressElement(label);
  return label;
}
