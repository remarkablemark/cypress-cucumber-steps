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
 * @param labelText - Label text.
 * @param errorMessage - Error message.
 *
 * @private
 */
export function setCypressElementByLabelText(
  labelText: string,
  errorMessage: string
) {
  return cy.get('body').then(($body) => {
    let cypressElement;

    if ($body.find('label:visible').text().includes(labelText)) {
      cypressElement = cy.contains('label:visible', labelText);
    } else if ($body.find(`[aria-labelledby='${labelText}']:visible`).length) {
      cypressElement = cy
        .get(`[aria-labelledby='${labelText}']:visible`)
        .first();
    } else if ($body.find(`[aria-label='${labelText}']:visible`).length) {
      cypressElement = cy.get(`[aria-label='${labelText}']:visible`).first();
    } else {
      throw new Error(errorMessage);
    }

    setCypressElement(cypressElement);
  });
}
