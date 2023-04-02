/* eslint-disable tsdoc/syntax */

/**
 * Get all Cypress elements by display value.
 *
 * @param element - Element name.
 * @param value - Display value.
 * @returns - Cypress element.
 * @private
 */
export function getAllByDisplayValue(
  element: 'input' | 'textarea',
  value: string
) {
  return cy
    .get(`${element}:visible`)
    .filter(
      (index, element: HTMLInputElement) =>
        Cypress.$(element).val()?.toString() === value
    );
}

/**
 * Get first Cypress element by display value.
 *
 * @param element - Element name.
 * @param value - Display value.
 * @returns - Cypress element.
 * @private
 */
export function getByDisplayValue(
  element: 'input' | 'textarea',
  value: string
) {
  return getAllByDisplayValue(element, value).first();
}
