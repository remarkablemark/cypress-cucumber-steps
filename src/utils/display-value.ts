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
  value: string,
) {
  return cy
    .get(`${element}:visible`)
    .filter(
      (index, element: HTMLInputElement) =>
        Cypress.$(element).val()?.toString() === value,
    )
    .first();
}
