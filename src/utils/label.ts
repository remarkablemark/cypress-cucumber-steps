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
 *
 * @private
 */
export function setCypressElementByLabelText(text: string) {
  const cypressElement = cy.get(
    [
      `label:visible:contains('${text}')`,
      `[aria-labelledby='${text}']`,
      `[aria-label='${text}']`,
    ].join(',')
  );
  setCypressElement(cypressElement.first());
  return cypressElement;
}
