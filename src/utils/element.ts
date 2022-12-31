/* eslint-disable tsdoc/syntax */

/**
 * @private
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CypressChainableElement = Cypress.Chainable<any>;

let cypressElement: CypressChainableElement;

/**
 * Set Cypress element.
 *
 * @private
 *
 * @see
 *
 * - {@link getCypressElement}
 *
 * @param element - Cypress element.
 */
export function setCypressElement(element: CypressChainableElement): void {
  cypressElement = element;
}

/**
 * Get Cypress element.
 *
 * @private
 *
 * @see
 *
 * - {@link setCypressElement}
 *
 * @returns - Cypress element.
 */
export function getCypressElement(): CypressChainableElement {
  if (!Cypress.isCy(cypressElement)) {
    throw new Error(
      `The element you are chaining off is ${cypressElement}.

Add a preceding step "When I get element by ..." or "When I find element by ..."`
    );
  }
  return cypressElement;
}
